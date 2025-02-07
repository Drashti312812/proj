"use client";
import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false); // Default to false to avoid SSR mismatch
  const [mounted, setMounted] = useState(false); // Track when component is mounted

  useEffect(() => {
    // Set dark mode based on localStorage after mounting
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkMode(true);
    }
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      if (darkMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode, mounted]);

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode, mounted }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
