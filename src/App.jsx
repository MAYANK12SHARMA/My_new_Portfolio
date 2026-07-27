import { Navbar } from "@/layout/Navbar";
import { Footer } from "@/layout/Footer";

import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Experience } from "@/sections/Experience";
import { Projects } from "@/sections/Projects";
import { Contact } from "@/sections/Contact";

// New sections (we'll create these next)
import { Skills } from "@/sections/Skills";
// import { Achievements } from "@/sections/Achievements";
import { Certifications } from "@/sections/Certifications";
import { Leadership } from "@/sections/Leadership";
import { Education } from "@/sections/Education";
import { Resume } from "@/sections/Resume";

function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">
      <Navbar />

      <main className="flex flex-col">
        <section id="home">
          <Hero />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="experience">
          <Experience />
        </section>

        <section id="certifications">
          <Certifications />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="leadership">
          <Leadership />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;