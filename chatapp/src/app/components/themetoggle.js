"use client";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check the user's theme preference from local storage or system preferences
    const userPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark" || (!savedTheme && userPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setIsDark(!isDark);
  };

  return (
    <div
      className={`relative w-24 h-12 bg-gray-300 rounded-full p-2 flex items-center justify-between transition-colors ${
        isDark ? "bg-gray-600" : "bg-blue-400"
      }`}
      onClick={toggleTheme}
    >
      {/* Text for light mode */}
      <span
        className={`text-sm ${isDark ? "text-gray-500" : "text-black"} ml-2`}
      >
        Light
      </span>

      {/* Text for dark mode */}
      <span
        className={`text-sm ${
          isDark ? "text-white mr-2" : "text-gray-400"
        } mr-2`}
      >
        Dark
      </span>

      <div
        className={`absolute right-2 w-8 h-8 bg-white rounded-full transition-transform transform ${
          isDark ? "-translate-x-16" : ""
        }`}
      ></div>
    </div>
  );
};

export default ThemeToggle;
