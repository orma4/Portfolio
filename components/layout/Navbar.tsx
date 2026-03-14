"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

const NAV_LINKS = [
  { name: "Projects", href: "#projects" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useEffect(() => {
    return scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "py-4 bg-background/80 backdrop-blur-md border-border/50"
          : "py-8 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between relative">
        {/* Empty left space for flex balance on desktop, or mobile menu */}
        <div className="flex-1 md:hidden">
          <button className="text-foreground">
            <div className="w-6 h-px bg-foreground mb-1.5" />
            <div className="w-6 h-px bg-foreground" />
          </button>
        </div>
        <div className="flex-1 hidden md:block"></div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center justify-center gap-10">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group relative text-xs uppercase tracking-[0.2em] text-muted hover:text-foreground transition-colors duration-300 font-mono"
            >
              {link.name}
              <span className="absolute -bottom-2 left-1/2 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full group-hover:left-0" />
            </Link>
          ))}

          {/* <Link
            href="#contact"
            className="px-6 py-2 border border-border rounded-full text-xs uppercase tracking-[0.2em] text-foreground hover:border-accent hover:text-accent transition-all duration-300 font-mono"
          >
            {"Let's Talk"}
          </Link> */}
        </div>

        {/* Right side - Theme Toggle */}
        <div className="flex-1 flex justify-end">
          <ThemeToggle />
        </div>
      </div>
    </motion.nav>
  );
};
