"use client";
import { useTheme } from "../context/ThemeContext";
import { Switch } from "@headlessui/react";

export default function ThemeToggle() {
  const { darkMode, setDarkMode, mounted } = useTheme();

  if (!mounted) return null; // Avoid hydration error by not rendering before mount

  return (
    <div className="flex items-center space-x-2">
      <span className="text-sm">{darkMode ? "Dark Mode" : "Light Mode"}</span>
      <Switch
        checked={darkMode}
        onChange={() => setDarkMode(!darkMode)}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition 
          ${darkMode ? "bg-blue-600" : "bg-gray-300"}`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full bg-white transition 
            ${darkMode ? "translate-x-6" : "translate-x-1"}`}
        />
      </Switch>
    </div>
  );
}
