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

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#0a0a0a] font-['Archivo',sans-serif] transition-colors duration-500">
        <Navigation />
        <main>
          <Hero />
          <Partners />
          <Services />
          <Projects />
          <Process />
          <Testimonial />
          <CTA />
        </main>
        <Footer />
        <FloatingControls />
      </div>
    </ThemeProvider>
  );
}
