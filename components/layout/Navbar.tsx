"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";

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
          ? "py-4 bg-background/80 backdrop-blur-md border-border"
          : "py-8 bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="group relative">
          <span className="text-xl font-bold tracking-tighter text-white">
            PORTFOLIO<span className="text-accent">.</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-[1px] bg-accent transition-all duration-300 group-hover:w-full" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.2em] text-muted hover:text-white transition-colors duration-300 font-mono"
            >
              {link.name}
            </Link>
          ))}

          <Link
            href="#contact"
            className="px-6 py-2 border border-border rounded-full text-[10px] uppercase tracking-[0.2em] text-white hover:bg-white hover:text-background transition-all duration-300 font-mono"
          >
            {"Let's Talk"}
          </Link>
        </div>

        {/* Mobile Menu Button (simplified for now) */}
        <button className="md:hidden text-white">
          <div className="w-6 h-px bg-white mb-1.5" />
          <div className="w-6 h-px bg-white" />
        </button>
      </div>
    </motion.nav>
  );
};
