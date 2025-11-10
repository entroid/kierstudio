import { ThemeProvider } from "./components/ThemeContext";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Partners } from "./components/Partners";
import { Services } from "./components/Services";
import { Projects } from "./components/Projects";
import { Testimonial } from "./components/Testimonial";
import { Process } from "./components/Process";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";
import { FloatingControls } from "./components/FloatingControls";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Terms from "./pages/Terms";
import Cookies from "./pages/Cookies";
import { useEffect, useState } from "react";

export default function App() {
  const getRoute = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState<string>(getRoute());

  useEffect(() => {
    const onHashChange = () => setRoute(getRoute());
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  // Scroll to top when navigating to standalone hash-routes (begin with "/")
  useEffect(() => {
    if (route.startsWith("/")) {
      requestAnimationFrame(() => {
        // Force scroll position on both window and document for cross-browser reliability
        window.scrollTo({ top: 0, behavior: "auto" });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      });
    }
  }, [route]);

  const isPrivacy = route === "/privacy";
  const isTerms = route === "/terms";
  const isCookies = route === "/cookies";

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-['Archivo',sans-serif] transition-colors duration-500">
        <Navigation />
        <main>
          {isPrivacy ? (
            <PrivacyPolicy />
          ) : isTerms ? (
            <Terms />
          ) : isCookies ? (
            <Cookies />
          ) : (
            <>
              <Hero />
              <Partners />
              <Services />
              <Projects />
              <Process />
              <Testimonial />
              <CTA />
            </>
          )}
        </main>
        <Footer />
        <FloatingControls />
      </div>
    </ThemeProvider>
  );
}
