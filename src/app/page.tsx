import Navbar from "@/components/layout/Navbar";
import About from "@/components/sections/about";
import Client from "@/components/sections/client";
import Experience from "@/components/sections/experience";
import ProjectCard from "@/components/sections/project";
import Publication from "@/components/sections/publication";
import TechStack from "@/components/sections/stack";
import ProjectPage from "./project/page";

export default function Home() {
  return (
    <div className="pt-6 pb-6 pl-10 pr-10">
      <Navbar />

      <main>
        <About />
        <Experience />
        <TechStack />
        <ProjectPage />
        <Client />
        <Publication />
      </main>
      {/* <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer /> */}
    </div>
  );
}
