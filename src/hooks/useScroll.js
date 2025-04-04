"use client";

import { useState, useEffect } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
      setShowScrollButton(window.scrollY > 200);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    playClickSound();
  };

  const playClickSound = () => {
    if (typeof window !== "undefined") {
      const clickSound = new Audio("/click.mp3");
      clickSound.currentTime = 0; // Reset sound for instant replay
      clickSound.play();
    }
  };

  return { isScrolled, showScrollButton, scrollToTop };
};

export default useScroll;
