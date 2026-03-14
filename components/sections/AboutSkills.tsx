"use client";

import { motion } from "motion/react";
import { Download } from "lucide-react";

const SKILLS = [
  { name: "Frontend", items: ["React", "JavaScript", "Redux", "CSS", "Material UI"] },
  { name: "Backend", items: ["TypeScript", "Node.js", "Express.js", "RabbitMQ", "Kafka"] },
  { name: "Infrastructure", items: ["MongoDB", "PostgreSQL", "Docker", "AWS", "GCP"] },
];

export const AboutSkills = () => {
  return (
    <section id="about" className="w-full py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
          {/* About Column */}
          <div className="space-y-12">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.3em] text-muted font-mono"
              >
                About Me
              </motion.span>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-foreground"
              >
                BUILDING SYSTEMS <br /> THAT SCALE
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6 text-muted text-lg font-light leading-relaxed"
            >
              <p>
                I’m Or, a Full-Stack Developer with 4+ years of experience building scalable production
                systems using Node.js, React, PostgreSQL, MongoDB, and cloud platforms like AWS and Google
                Cloud.
                <br />
                <br />I focus on designing robust architectures and end-to-end solutions, from system design
                and backend services to polished frontend interfaces. My work emphasizes performance,
                reliability, and maintainability, ensuring systems can scale effectively as usage grows.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="pt-4"
            >
              <motion.a
                href="/Or Maman.docx"
                download
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-medium overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] border border-transparent hover:border-accent"
              >
                <span className="relative z-10">Download Resume</span>
                <Download className="relative z-10 w-4 h-4 transition-transform group-hover:-translate-y-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.a>
            </motion.div>
          </div>

          {/* Skills Column */}
          <div id="skills" className="space-y-16">
            <div className="space-y-4">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-sm uppercase tracking-[0.3em] text-muted font-mono"
              >
                Tech Stack
              </motion.span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {SKILLS.map((category, idx) => (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                  className="space-y-6"
                >
                  <h3 className="text-[14px] uppercase tracking-[0.4em] text-accent font-bold border-b border-accent/40 pb-4">
                    {category.name}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li
                        key={item}
                        className="text-foreground font-light tracking-wide flex items-center gap-3"
                      >
                        <div className="w-1 h-1 rounded-full bg-border" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
