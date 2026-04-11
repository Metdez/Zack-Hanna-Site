import Hero from "@/components/sections/Hero";
import AmbientLoop from "@/components/sections/AmbientLoop";
import WhatIDo from "@/components/sections/WhatIDo";
import Projects from "@/components/sections/Projects";
import HowIWork from "@/components/sections/HowIWork";
import LookingFor from "@/components/sections/LookingFor";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";
import OutroLoop from "@/components/sections/OutroLoop";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <AmbientLoop />
      <WhatIDo />
      <Projects />
      <HowIWork />
      <LookingFor />
      <About />
      <Contact />
      <OutroLoop />
    </main>
  );
}
