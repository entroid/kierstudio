import puppeteer from "puppeteer-core";
import chromium from "@sparticuz/chromium";
import { spawn, ChildProcess } from "child_process";
import { existsSync } from "fs";
import { writeFile } from "fs/promises";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const rootDir = join(__dirname, "..");
const buildDir = join(rootDir, "build");

// Detect if we're running in Vercel/serverless environment
const isVercel = process.env.VERCEL === "1" || 
                 process.env.VERCEL_ENV !== undefined || 
                 process.env.AWS_LAMBDA_FUNCTION_NAME !== undefined;

// Routes to pre-render
const routes = [
  { path: "/", output: "index.html", waitFor: "main" },
  { path: "/#/privacy", output: "privacy.html", waitFor: "main h1" },
  { path: "/#/terms", output: "terms.html", waitFor: "main h1" },
  { path: "/#/cookies", output: "cookies.html", waitFor: "main h1" },
];

// Wait for server to be ready
async function waitForServer(url: string, maxAttempts = 30): Promise<void> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 2000);
      const response = await fetch(url, { signal: controller.signal });
      clearTimeout(timeoutId);
      if (response.ok) {
        console.log(`✓ Server ready at ${url}`);
        return;
      }
    } catch (error) {
      // Server not ready yet, continue waiting
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  throw new Error(`Server failed to start at ${url} after ${maxAttempts} attempts`);
}

// Pre-render a single route
async function prerenderRoute(
  browser: puppeteer.Browser,
  baseUrl: string,
  route: { path: string; output: string; waitFor: string }
): Promise<void> {
  console.log(`\n🔄 Pre-rendering ${route.path}...`);

  const page = await browser.newPage();
  
  try {
    // Set viewport
    await page.setViewport({ width: 1920, height: 1080 });

    // Navigate to the route
    const fullUrl = `${baseUrl}${route.path}`;
    await page.goto(fullUrl, {
      waitUntil: "networkidle0",
      timeout: 60000,
    });

    // Wait for React to render the content
    try {
      await page.waitForSelector(route.waitFor, { timeout: 15000 });
    } catch (error) {
      console.warn(`⚠ Warning: Selector "${route.waitFor}" not found, continuing anyway...`);
    }

    // Helper function to wait (replacement for deprecated waitForTimeout)
    const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));
    
    // Wait for animations and lazy-loaded content to finish
    await wait(3000);
    
    // Additional wait to ensure all content is rendered (especially for hash routes)
    await wait(2000);

    // Extract the root div's inner HTML (this contains all the rendered React content)
    const rootContent = await page.evaluate(() => {
      const root = document.getElementById("root");
      if (!root) {
        return { innerHTML: "", hasContent: false };
      }
      
      // Get all text content to verify rendering
      const textContent = root.textContent || "";
      const innerHTML = root.innerHTML;
      
      const hasContent = textContent.length > 100 && (
        textContent.includes("Kier Studio") || 
        textContent.includes("SaaS") ||
        textContent.includes("Privacy") ||
        textContent.includes("Terms") ||
        textContent.includes("Cookies")
      );
      
      return { innerHTML, hasContent };
    }) as { innerHTML: string; hasContent: boolean };

    if (!rootContent.hasContent) {
      console.warn(`⚠ Warning: Route ${route.path} may not have fully rendered content`);
    }

    // Get the full HTML document
    const html = await page.content();

    // Replace the root div with the fully rendered content
    // This ensures all text content is in the static HTML for SEO
    const updatedHtml = html.replace(
      /<div id="root">[\s\S]*?<\/div>/,
      `<div id="root">${rootContent.innerHTML}</div>`
    );

    // Save the HTML file
    const outputPath = join(buildDir, route.output);
    await writeFile(outputPath, updatedHtml, "utf-8");
    
    if (rootContent.hasContent) {
      console.log(`✓ Saved: ${route.output} (contains text content)`);
    } else {
      console.log(`✓ Saved: ${route.output} (content verification skipped)`);
    }
  } catch (error) {
    console.error(`✗ Error pre-rendering ${route.path}:`, error);
    throw error;
  } finally {
    await page.close();
  }
}

// Start preview server
function startPreviewServer(): Promise<ChildProcess> {
  return new Promise((resolve, reject) => {
    console.log("📦 Starting preview server...");
    
    // Use vite preview directly
    const viteProcess = spawn("npx", ["vite", "preview", "--port", "4173", "--host"], {
      cwd: rootDir,
      stdio: "pipe",
      shell: true,
    });

    let serverReady = false;

    viteProcess.stdout?.on("data", (data) => {
      const output = data.toString();
      if (output.includes("Local:") || output.includes("localhost")) {
        if (!serverReady) {
          serverReady = true;
          console.log("✓ Preview server started");
          resolve(viteProcess);
        }
      }
    });

    viteProcess.stderr?.on("data", (data) => {
      const output = data.toString();
      if (output.includes("Local:") || output.includes("localhost")) {
        if (!serverReady) {
          serverReady = true;
          console.log("✓ Preview server started");
          resolve(viteProcess);
        }
      }
    });

    viteProcess.on("error", (error) => {
      reject(error);
    });

    // Timeout after 30 seconds
    setTimeout(() => {
      if (!serverReady) {
        viteProcess.kill();
        reject(new Error("Preview server failed to start within 30 seconds"));
      }
    }, 30000);
  });
}

// Main pre-render function
async function prerender(): Promise<void> {
  console.log("🚀 Starting pre-render process...\n");

  // Check if build directory exists
  if (!existsSync(buildDir)) {
    throw new Error(
      `Build directory not found: ${buildDir}\nPlease run 'npm run build' first.`
    );
  }

  let viteProcess: ChildProcess | null = null;
  const baseUrl = "http://localhost:4173";

  try {
    // Start preview server
    viteProcess = await startPreviewServer();

    // Wait for server to be ready
    await waitForServer(baseUrl);

    // Launch Puppeteer
    console.log("\n🌐 Launching browser...");
    
    let browser;
    if (isVercel) {
      // Use Chromium optimized for serverless environments (Vercel/Lambda)
      console.log("📦 Using serverless-optimized Chromium...");
      
      // Configure Chromium for serverless
      chromium.setGraphicsMode(false); // Disable GPU for serverless
      
      try {
        const executablePath = await chromium.executablePath();
        browser = await puppeteer.launch({
          args: [
            ...chromium.args,
            "--hide-scrollbars",
            "--disable-web-security",
            "--disable-dev-shm-usage",
            "--single-process", // Important for serverless
          ],
          defaultViewport: chromium.defaultViewport,
          executablePath,
          headless: chromium.headless,
        });
      } catch (error: any) {
        console.error("❌ Error launching Chromium in serverless environment:", error.message);
        console.error("💡 This might be due to Chromium binary download issues.");
        throw error;
      }
    } else {
      // Use local Chrome/Chromium for development
      console.log("💻 Using local Chrome...");
      
      // Try to find Chrome in common locations or use system default
      const chromePaths = [
        process.env.PUPPETEER_EXECUTABLE_PATH,
        process.env.CHROME_PATH,
        "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        "/usr/bin/google-chrome",
        "/usr/bin/chromium",
        "/usr/bin/chromium-browser",
        "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
        "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
      ].filter(Boolean);
      
      let executablePath: string | undefined;
      for (const path of chromePaths) {
        if (path && existsSync(path)) {
          executablePath = path;
          console.log(`✓ Found Chrome at: ${path}`);
          break;
        }
      }
      
      // Launch browser (if executablePath is undefined, puppeteer-core will try to use system default)
      try {
        const launchOptions: any = {
          headless: true,
          args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
        };
        
        if (executablePath) {
          launchOptions.executablePath = executablePath;
        }
        
        browser = await puppeteer.launch(launchOptions);
      } catch (error: any) {
        console.error("❌ Error launching browser:", error.message);
        console.error("\n💡 Solutions:");
        console.error("   1. Install Chrome/Chromium on your system");
        console.error("   2. Set PUPPETEER_EXECUTABLE_PATH environment variable");
        console.error("   3. Install puppeteer (not puppeteer-core) for automatic Chrome download");
        throw error;
      }
    }

    try {
      // Pre-render all routes
      for (const route of routes) {
        await prerenderRoute(browser, baseUrl, route);
      }

      console.log("\n✅ Pre-render complete!");
      console.log("\n📄 Generated files:");
      routes.forEach((route) => {
        console.log(`   - ${route.output}`);
      });
      console.log("\n💡 Tip: These HTML files contain fully rendered content for SEO!");
    } finally {
      await browser.close();
    }
  } catch (error) {
    console.error("❌ Pre-render failed:", error);
    throw error;
  } finally {
    // Kill the preview server
    if (viteProcess) {
      viteProcess.kill();
      console.log("\n🛑 Preview server stopped");
    }
  }
}

// Run the pre-render
prerender().catch((error) => {
  console.error("❌ Fatal error:", error);
  process.exit(1);
});

