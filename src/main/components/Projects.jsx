import React from "react";
import Section from "./Section";
import ProjectContainer from "./ProjectContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";

const About = () => {
  return (
    <div id="projects" className="flex flex-col justify-center items-center ">
      <div
        id="projects"
        className=" relative mx-auto h-auto mb-48 flex flex-col justify-center items-center"
      >
        <motion.div
          variants={fadeIn(0.2, "up")}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: true, amount: 0 }}
          className="flex flex-col justify-center items-center w-full mb-12 mt-12"
        >
          <h1 className="md:h1 text-center font-primary text-4xl sm:!text-4xl !font-light italic">
            What I've been working on
          </h1>

          <div className="w-[80%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
        </motion.div>
        <div className="relative container w-auto rounded-2xl">
          <motion.div
            variants={fadeIn(0.5, "up")}
            whileInView={"show"}
            initial="hidden"
            viewport={{ once: true, amount: 0 }}
            className="gap-6 sm:gap-6 lg:gap-4 mx-auto w-[80%] flex flex-col sm:w-[80%] sm:flex sm:flex-col md:justify-center md:items-center lg:grid lg:grid-cols-3 lg:grid-rows-2  lg:container lg:w-full md:h-full lg:h-[50vh]"
          >
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

            <ProjectContainer
              extraClassNames={"col-span-2"}
              source="/RebirthTitleScreen.png"
              altText="Rebirth Title Image"
              description="An experimental rhythm game crafted with Qt and Miniaudio frameworks."
              projectTitle="Rebirth"
              btnUrl="/projectRebirth"
            />
          </motion.div>
        </div>

        <button></button>
      </div>
    </div>
  );
};

export default About;
