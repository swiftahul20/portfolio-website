import About from "./@about/page";
import Experience from "./@experience/page";
import Hero from "./@home/page";
import Projects from "./@projects/page";
import Skills from "./@skills/page";
import Footer from "./component/footer/page";
import Connect from "./connect/page";

export default function Home() {
  return (
    <>
      <div className="min-h-screen bg-white text-black">
        <main className="mx-auto max-w-2xl px-4 py-10 md:px-0 md:py-20">
          <div className="flex flex-col gap-8">
            <Hero />
            <About />
            <Experience />
            <Skills />
            <Projects />
            <Connect />
          </div>
        </main>
      </div>
    </>
  );
}
