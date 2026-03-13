"use client";

import { motion } from "motion/react";
import { Mail, Github, Linkedin, ArrowRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="w-full py-32 px-6 bg-background border-t border-border/30">
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
                className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight"
              >
                {"LET'S CREATE"} <br /> SOMETHING <br /> EXCEPTIONAL.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="max-w-md text-muted text-lg font-light leading-relaxed"
            >
              I am currently open to new opportunities and interesting collaborations. Whether you have a
              specific project in mind or just want to say hi, my inbox is always open.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-8"
            >
              <a
                href="mailto:hello@example.com"
                className="group flex items-center gap-3 text-white hover:text-accent transition-colors duration-300"
              >
                <Mail className="w-5 h-5 text-muted group-hover:text-accent transition-colors" />
                <span className="text-sm font-medium">hello@example.com</span>
              </a>
            </motion.div>
          </div>

          {/* Large CTA / Links Column */}
          <div className="flex flex-col gap-6">
            <motion.a
              href="mailto:hello@example.com"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="group relative w-full aspect-square md:aspect-video lg:aspect-square flex flex-col items-center justify-center bg-surface border border-border rounded-sm hover:bg-white/5 transition-all duration-500"
            >
              <span className="text-sm uppercase tracking-[0.5em] text-muted mb-4 group-hover:text-accent transition-colors">
                Start a Conversation
              </span>
              <ArrowRight className="w-12 h-12 text-white group-hover:translate-x-4 transition-transform duration-500 ease-out" />
            </motion.a>

            <div className="grid grid-cols-2 gap-6">
              <a
                href="#"
                className="flex items-center justify-center py-8 bg-surface border border-border rounded-sm hover:border-accent transition-colors duration-300 group"
              >
                <Github className="w-6 h-6 text-muted group-hover:text-white transition-colors" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center py-8 bg-surface border border-border rounded-sm hover:border-accent transition-colors duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-muted group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-32 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-[0.2em] text-muted font-mono">
          <p>© 2026 Digital Portfolio</p>
          <p>Built with Next.js & Motion</p>
          <p>Available for Freelance</p>
        </div>
      </div>
    </section>
  );
};
