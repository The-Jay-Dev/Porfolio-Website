import { Features } from "tailwindcss";

import Header from "./main/components/Header";
import Hero from "./main/components/Hero";
import Projects from "./main/components/Projects";
import Skills from "./main/components/Skills";
import Footer from "./main/components/Footer";
import Contact from "./main/components/Contact";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default App;
