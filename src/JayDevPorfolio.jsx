import { Features } from "tailwindcss";

import Header from "./main/components/Header";
import Hero from "./main/components/Hero";
import Projects from "./main/components/Projects";
import AboutMe from "./main/components/AboutMe";
import Footer from "./main/components/Footer";
import Contact from "./main/components/Contact";
import Skills from "./main/components/Skills";

const App = () => {
  return (
    <>
      <div className="overflow-hidden">
        <Header />
        <div className=" relative bg-fixed -z-5 bg-[url('/campus-outdoors-2026.jpg')] bg-cover ">
          <div className="fixed -z-10 inset-0 backdrop-blur-sm" />
          <Hero />
          <AboutMe />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
