"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-8 h-8" />; // Placeholder to avoid layout shift
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-border/50 text-foreground hover:text-accent hover:border-accent transition-colors duration-300 cursor-pointer"
      aria-label="Toggle Theme"
    >
      {resolvedTheme === "dark" ? (
        <Sun className="w-5 h-5 stroke-[2.5]" />
      ) : (
        <Moon className="w-5 h-5 stroke-[2.5]" />
      )}
    </button>
  );
}
