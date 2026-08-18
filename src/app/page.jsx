import About from "../components/About";
import Connect from "../components/Connect";
import Experience from "../components/Experience";
import Hero from "../components/Home";
import ParallaxBackground from "../components/ParallaxBackground";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <>
      <div className="min-h-screen text-black">
        <ParallaxBackground />
        <main className="mx-auto max-w-2xl px-4 py-10 md:px-0 md:py-20">
          <div className="flex flex-col gap-8">
            <div data-section="hero">
              <Hero />
            </div>
            <div data-section="about">
              <About />
            </div>
            <div data-section="experience">
              <Experience />
            </div>
            <div data-section="skills">
              <Skills />
            </div>
            <div data-section="projects">
              <Projects />
            </div>
            <div data-section="connect">
              <Connect />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
