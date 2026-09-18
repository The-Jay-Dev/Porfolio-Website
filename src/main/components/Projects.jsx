import React from "react";
import Section from "./Section";
import ProjectContainer from "./ProjectContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";
import BioWindow from "./BioWindow";
import { div } from "framer-motion/client";

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex h-screen justify-center pt-16 bg-home-bg-primary bg-cover"
    >
      <h1 className="text-home-text-primary absolute left-[10%] mt-16 text-start tracking-wider font-secondary text-5xl font-bold! z-10">
        What I've been working on lately...
      </h1>
      <div className="absolute  bg-fixed flex-col justify-center w-full h-full  " />
      <h1 className="absolute right-0 text-[18rem]! text-home-bg-secondary/80!">
        PROJECTS
      </h1>

      <motion.div
        variants={fadeIn(0.5, "up")}
        whileInView={"show"}
        initial="hidden"
        viewport={{ once: true, amount: 0 }}
        className="h-full w-full"
      >
        <div className="absolute left-[5%] mt-48 w-[30%]">
          <ProjectContainer
            extraClassNames={"col-span-2"}
            source="/RebirthTitleScreen.png"
            altText="Rebirth Title Image"
            description="An experimental rhythm game crafted with Qt and Miniaudio frameworks."
            projectTitle="Rebirth"
            btnUrl="/projectRebirth"
          />
        </div>
        <div className="absolute right-[50%] mt-[30%] w-[30%]">
          <ProjectContainer
            source="/Quizzer.png"
            altText="Quizzer Image"
            description="A self-quizzing website produced with base JavaScript."
            projectTitle="Quizzer"
            btnUrl="https://github.com/The-Jay-Dev/Quizzer-Website"
          />
        </div>

        <div className="absolute right-[5%] mt-48 w-[30%]">
          <ProjectContainer
            source="/GodotTrajectoryLineScreen.png"
            altText="Trajectory Line Project Image"
            description="A trajectory line that predicts the player's jump path."
            projectTitle="Trajectory Line Engine"
            btnUrl="https://github.com/The-Jay-Dev/2D-Trajectory-Line-GodotV4.3"
          />
        </div>

        <div className="absolute right-[10%] mt-[30%] w-[30%]">
          <ProjectContainer
            extraClassNames={"row-span-2"}
            source="/FileExplorerMainScreen.png"
            altText="File Explorer Project Image"
            description="A tool for automatic file renaming."
            projectTitle="File Sorter"
            btnUrl="https://github.com/The-Jay-Dev/File-Sorter"
          />
        </div>
      </motion.div>

      <button></button>
      {/* </div> */}
    </div>
  );
};

export default Projects;
