"use client";

import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { useState, useEffect } from "react";

const words = ["Determination.", "Curiosity.", "Innovation."];

export const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 1800); // Time for slower typing (~1s) + 0.75s reading pause + quick transition
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Decorative Element - Subtle Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(var(--border) 1px, transparent 1px), linear-gradient(90deg, var(--border) 1px, transparent 1px)`,
          backgroundSize: "64px 64px",
        }}
      />

      {/* Background Radial Gradient for depth */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--color-accent),transparent_50%)] opacity-[0.08] pointer-events-none" />

      <div className="relative z-10 max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center space-y-6 md:space-y-8"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="text-[#9CA3AF] font-semibold text-base tracking-wide uppercase"
          >
            Driven by:
          </motion.span>

          <div className="relative h-[1.3em] flex items-center justify-center text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[1]">
            {/* Invisible placeholder to establish maximum width and keep it centered */}
            <span className="invisible pointer-events-none pr-4">Determination.</span>
            <div className="absolute inset-y-0 left-0 flex items-center justify-center overflow-visible w-full">
              <AnimatePresence mode="popLayout">
                <motion.div
                  key={words[index]}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: {
                        staggerChildren: 0.08,
                      },
                    },
                    exit: {
                      opacity: 0,
                      y: -15,
                      transition: { duration: 0.3, ease: "easeIn" },
                    },
                  }}
                  className="text-accent flex pb-2 pr-4"
                >
                  {words[index].split("").map((char, i) => (
                    <motion.span
                      key={i}
                      variants={{
                        hidden: { opacity: 0, filter: "blur(2px)" },
                        visible: { opacity: 1, filter: "blur(0px)", transition: { duration: 0.1 } },
                      }}
                      className="inline-block"
                    >
                      {char === " " ? "\u00A0" : char}
                    </motion.span>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="max-w-xl text-slate-800 dark:text-[#F8FAFC] font-medium text-xl leading-relaxed mt-8"
          >
            I'm <span className="text-accent font-bold">Or</span>, a Full Stack developer 4+ years of
            experience building scalable production systems using Node.js, React, PostgreSQL, MongoDB, AWS and
            GCP.
            <br />
            <br />
            Focused on system design, performance, and reliable architectures.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};
