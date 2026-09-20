import React from "react";
import Section from "./Section";
import ProjectContainer from "./ProjectContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";
import { div } from "framer-motion/client";

const Projects = () => {
  return (
    <div
      id="projects"
      className=" relative overflow-hidden flex flex-col h-fit items-center justify-center pt-16 bg-home-bg-primary bg-cover"
    >
      <h1 className="text-home-text-primary mt-16 text-center xl:text-start tracking-wider font-secondary text-5xl font-bold! z-10">
        What I've been working on lately...
      </h1>

      <h1 className="md:absolute xl:block -translate-y-120 translate-x-120 hidden right-0 text-[18rem]! text-home-bg-secondary/80!">
        PROJECTS
      </h1>

      <motion.div
        variants={fadeIn(0, "up", 0.8)}
        whileInView={"show"}
        initial="hidden"
        viewport={{ once: true, amount: 0 }}
        className="mt-24 mb-24 xl:grid grid-cols-2 justify-center grid-rows-2 h-full w-[80%] xl:w-[70%] flex flex-col items-center gap-6 lg:gap-16!"
      >
        <ProjectContainer
          extraClassNames={"col-span-2"}
          source="/RebirthTitleScreen.png"
          altText="Rebirth Title Image"
          description="An experimental rhythm game crafted with Qt and Miniaudio frameworks."
          projectTitle="Rebirth"
          btnUrl="/projectRebirth"
        />

        <ProjectContainer
          source="/Quizzer.png"
          altText="Quizzer Image"
          description="A self-quizzing website produced with base JavaScript."
          projectTitle="Quizzer"
          btnUrl="https://github.com/The-Jay-Dev/Quizzer-Website"
        />

        <ProjectContainer
          source="/GodotTrajectoryLineScreen.png"
          altText="Trajectory Line Project Image"
          description="A trajectory line that predicts the player's jump path."
          projectTitle="Trajectory Line Engine"
          btnUrl="https://github.com/The-Jay-Dev/2D-Trajectory-Line-GodotV4.3"
        />

        <ProjectContainer
          extraClassNames={"row-span-2"}
          source="/FileExplorerMainScreen.png"
          altText="File Explorer Project Image"
          description="A tool for automatic file renaming."
          projectTitle="File Sorter"
          btnUrl="https://github.com/The-Jay-Dev/File-Sorter"
        />
      </motion.div>

      <button></button>
      {/* </div> */}
    </div>
  );
};

export default Projects;
