"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  category: string;
  image: string;
  link: string;
  index: number;
}

export const ProjectCard = ({ title, category, image, link, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative cursor-pointer"
    >
      {/* Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-surface">
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
        <div className="h-full w-full transform transition-transform duration-700 group-hover:scale-105">
          {/* Using a placeholder div for now since I don't have actual images */}
          <div className="w-full h-full bg-gradient-to-br from-surface to-border flex items-center justify-center text-muted text-xs uppercase tracking-widest font-mono">
            {title}
          </div>
        </div>

        {/* Hover Arrow */}
        <div className="absolute top-6 right-6 z-20 opacity-0 transform translate-x-[-10px] translate-y-[10px] transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
            <ArrowUpRight className="text-background w-6 h-6" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mt-6 flex justify-between items-start">
        <div className="space-y-1">
          <p className="text-[10px] uppercase tracking-[0.2em] text-muted font-mono">{category}</p>
          <h3 className="text-xl font-medium tracking-tight text-white group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
        </div>
      </div>
    </motion.div>
  );
};
