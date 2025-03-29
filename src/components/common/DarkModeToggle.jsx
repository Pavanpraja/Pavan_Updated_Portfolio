"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

// Click sound effect

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const theme = localStorage.getItem("theme");
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    }
  }, []);

  const toggleDarkMode = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setIsDark(false);
      playClickSound();
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
      playClickSound();
    }
  };

  const playClickSound = () => {
    if (typeof window !== "undefined") {
      const clickSound = new Audio("/click.mp3"); // Add a "click.mp3" file in your public folder
      clickSound.currentTime = 0; // Reset sound for instant replay
      clickSound.play();
    }
  };

  return (
    <button
      onClick={toggleDarkMode}
      className="relative w-12 h-7 rounded-full bg-gray-200 dark:bg-gray-700 transition-all duration-1000 ease-in-out mt-[-0.3rem]"
    >
      <div
        className={`absolute top-1 ${
          isDark ? "right-1 rotate-[360deg]" : "left-1 rotate-[-360deg]"
        } w-5 h-5 rounded-full bg-white dark:bg-gray-800 transition-all duration-1000 ease-in-out flex items-center justify-center`}
      >
        {isDark ? (
          <Moon size={14} className="text-gray-200" />
        ) : (
          <Sun size={14} className="text-gray-800" />
        )}
      </div>
    </button>
  );
}
