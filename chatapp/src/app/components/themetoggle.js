import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDarkMode(true);
    } else if (storedTheme === "light") {
      document.documentElement.classList.remove("dark");
      setIsDarkMode(false);
    } else {
      const systemPrefersDark = window.matchMedia(
        "(prefers-color-scheme: dark)"
      ).matches;
      if (systemPrefersDark) {
        document.documentElement.classList.add("dark");
        setIsDarkMode(true);
      }
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button
      onClick={toggleTheme}
      className="bg-gray-300 dark:bg-gray-700 text-black dark:text-white px-4 py-2 rounded"
    >
      {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
    </button>
  );
};

export default ThemeToggle;
