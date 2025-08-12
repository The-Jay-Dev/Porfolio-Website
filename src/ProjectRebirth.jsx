import React from "react";
import Header from "./project_rebirth/components/Header";
import Hero from "./project_rebirth/components/Hero";
import ProjectFeatures from "./project_rebirth/components/ProjectFeatures";
import Footer from "./project_rebirth/components/Footer";
import MemoryStates from "./project_rebirth/components/MemoryStates";
import About from "./project_rebirth/components/About";
import CallToAction from "./project_rebirth/components/CallToAction";

const ProjectRebirth = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <ProjectFeatures />
      <MemoryStates />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default ProjectRebirth;
