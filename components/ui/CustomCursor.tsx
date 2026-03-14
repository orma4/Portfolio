"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show custom cursor background effect on desktop devices
    if (window.matchMedia("(hover: none) and (pointer: coarse)").matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", updatePosition);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", updatePosition);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 w-32 h-32 rounded-full bg-accent pointer-events-none z-50 blur-[40px]"
      animate={{
        x: position.x - 64,
        y: position.y - 64,
        opacity: 0.25,
      }}
      transition={{
        type: "tween",
        ease: "linear",
        duration: 0,
      }}
    />
  );
};
