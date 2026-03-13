import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { AboutSkills } from "@/components/sections/AboutSkills";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between overflow-hidden">
      <Hero />
      <Projects />
      <AboutSkills />
      <Contact />
    </main>
  );
}
