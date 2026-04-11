import Hero from "@/components/sections/Hero";
import WhatIDo from "@/components/sections/WhatIDo";
import Projects from "@/components/sections/Projects";
import HowIWork from "@/components/sections/HowIWork";
import LookingFor from "@/components/sections/LookingFor";
import About from "@/components/sections/About";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <WhatIDo />
      <Projects />
      <HowIWork />
      <LookingFor />
      <About />
      <Contact />
    </main>
  );
}
