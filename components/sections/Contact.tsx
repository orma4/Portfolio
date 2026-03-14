"use client";

import { motion } from "motion/react";
import { Mail, ArrowRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5 0-1.4-.5-2.5-1.5-3.4.1-.3.6-1.6-.1-3.4 0 0-1.2-.4-3.9 1.4a12.3 12.3 0 0 0-7 0C6.1 1.2 4.9 1.6 4.9 1.6c-.7 1.8-.2 3.1-.1 3.4-1 1-1.5 2-1.5 3.4 0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const Contact = () => {
  return (
    <section id="contact" className="w-full pt-32 pb-8 px-6 bg-background border-t border-border/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Text Column */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.3em] text-muted font-mono"
              >
                Get in Touch
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold tracking-tight text-foreground leading-tight"
              >
                {"LET'S WORK"} <br /> TOGETHER
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-md text-muted text-lg font-light leading-relaxed"
            >
              I am currently open to new opportunities and interesting collaborations.
              <br />
              Whether you have a specific project in mind or just want to say hi, my inbox is always open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-8"
            >
              <a
                href="mailto:omking@gmail.com"
                className="group flex items-center gap-3 text-foreground hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium">omking@gmail.com</span>
              </a>
            </motion.div>
          </div>

          {/* Large CTA / Links Column */}
          <div className="flex flex-col gap-4 relative">
            <motion.a
              href="mailto:omking@gmail.com"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative w-full aspect-square md:aspect-video lg:aspect-square flex flex-col items-center justify-center bg-surface border border-border rounded-sm hover:bg-white/10 hover:-translate-y-1 hover:border-purple-500/40 transition-all duration-500 overflow-hidden z-10"
            >
              {/* Subtle background glow */}
              <div
                className="absolute inset-0 pointer-events-none transition-all duration-500 opacity-80 group-hover:opacity-100 scale-100 group-hover:scale-110"
                style={{
                  background: "radial-gradient(circle at 75% 50%, rgba(168,85,247,0.25), transparent 85%)",
                }}
              />
              <span className="relative z-10 text-sm uppercase tracking-[0.5em] text-muted mb-4 group-hover:text-accent transition-colors">
                Start a Conversation
              </span>
              <ArrowRight className="relative z-10 w-12 h-12 text-foreground group-hover:translate-x-4 transition-transform duration-500 ease-out" />
            </motion.a>

            <div className="grid grid-cols-3 gap-6 relative z-10">
              <a
                href="https://github.com/orma4"
                className="relative flex items-center justify-center py-6 bg-surface border border-border rounded-sm transition-all duration-300 group hover:scale-[1.05] hover:border-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-purple-500/5"
                target="_blank"
              >
                <GithubIcon className="w-6 h-6 text-foreground/80 group-hover:text-accent transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/or-maman94/"
                className="relative flex items-center justify-center py-6 bg-surface border border-border rounded-sm transition-all duration-300 group hover:scale-[1.05] hover:border-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-purple-500/5"
                target="_blank"
              >
                <LinkedinIcon className="w-6 h-6 text-foreground/80 group-hover:text-accent transition-colors duration-300" />
              </a>
              <a
                href="mailto:omking@gmail.com"
                className="relative flex items-center justify-center py-6 bg-surface border border-border rounded-sm transition-all duration-300 group hover:scale-[1.05] hover:border-accent hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] hover:bg-purple-500/5"
              >
                <Mail className="w-6 h-6 text-foreground/80 group-hover:text-accent transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-32 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-center items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-muted font-mono">
          <p>© {new Date().getFullYear()} Or Maman. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};
