"use client";

import { motion } from "motion/react";

const SKILLS = [
  { name: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Motion"] },
  { name: "Backend", items: ["Node.js", "PostgreSQL", "Prisma", "GraphQL"] },
  { name: "Design", items: ["Figma", "Design Systems", "Typography", "Motion Design"] },
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
                className="text-4xl md:text-5xl font-bold tracking-tight text-white"
              >
                CRAFTING DIGITAL <br /> HARMONY.
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
                I am a multi-disciplinary developer with a passion for creating interfaces that are as
                functional as they are beautiful. With over 5 years of experience in the digital space,{" "}
                {"I've"}
                helped startups and established brands build high-end web experiences.
              </p>
              <p>
                My approach is rooted in technical precision and aesthetic restraint. I believe that the best
                digital products are those that feel invisible yet indispensable to the user.
              </p>
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
                Technical Stack
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
                  <h3 className="text-[10px] uppercase tracking-[0.4em] text-accent font-mono border-b border-border pb-4">
                    {category.name}
                  </h3>
                  <ul className="space-y-3">
                    {category.items.map((item) => (
                      <li key={item} className="text-white font-light tracking-wide flex items-center gap-3">
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
