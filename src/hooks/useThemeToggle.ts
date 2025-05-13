'use client'

import { useEffect, useState } from "react";

function useThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Comprobar el tema al cargar la página
    const isDark =
      localStorage.getItem("darkMode") === "true" ||
      (!localStorage.getItem("darkMode") &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode.toString());
    document.documentElement.classList.toggle("dark", newMode);
  };

  return { darkMode, toggleDarkMode };
}

export default useThemeToggle;
