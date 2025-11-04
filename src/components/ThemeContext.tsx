import { createContext, useContext, useState, useEffect, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleDarkMode: () => void;
  accessibility: AccessibilitySettings;
  updateAccessibility: (settings: Partial<AccessibilitySettings>) => void;
}

export interface AccessibilitySettings {
  fontSize: number;
  highContrast: boolean;
  reducedMotion: boolean;
  screenReader: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [accessibility, setAccessibility] = useState<AccessibilitySettings>({
    fontSize: 100,
    highContrast: false,
    reducedMotion: false,
    screenReader: false,
  });

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    try {
      const stored = localStorage.getItem("theme");
      const isSystemDark =
        window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialDark = stored ? stored === "dark" : isSystemDark;
      setDarkMode(initialDark);
    } catch {}
  }, []);

  // Reflect theme on <html> and persist
  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      try {
        localStorage.setItem("theme", "dark");
      } catch {}
    } else {
      root.classList.remove("dark");
      try {
        localStorage.setItem("theme", "light");
      } catch {}
    }
  }, [darkMode]);

  useEffect(() => {
    document.documentElement.style.fontSize = `${accessibility.fontSize}%`;
    if (accessibility.reducedMotion) {
      document.documentElement.style.setProperty("--animation-duration", "0s");
    } else {
      document.documentElement.style.setProperty("--animation-duration", "0.3s");
    }
  }, [accessibility]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const updateAccessibility = (settings: Partial<AccessibilitySettings>) => {
    setAccessibility((prev) => ({ ...prev, ...settings }));
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleDarkMode, accessibility, updateAccessibility }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }
  return context;
}
