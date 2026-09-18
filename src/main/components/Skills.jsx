import React from "react";
import SkillContainer from "./SkillContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";

const Skills = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-[#1b2431] ">
      <h1 className="p-16 text-start tracking-wider font-primary text-9xl sm:text-4xl! font-black! z-10">
        My Skills
      </h1>
      <motion.div
        variants={fadeIn(0.4, "up")}
        whileInView={"show"}
        initial="hidden"
        viewport={{ once: true, amount: 0 }}
        className="w-full h-full"
      >
        <div className="w-full flex justify-center items-center h-fit pt-24 pb-24">
          <div className="mt-2 mb-16 grid grid-cols-4 grid-rows-2 justify-center items-center h-fit gap-48">
            <SkillContainer
              sourceLink="https://isocpp.org/"
              iconClass={"devicon-cplusplus-plain"}
            />
            <SkillContainer
              sourceLink="https://www.qt.io/"
              iconClass={"devicon-qt-original"}
            />
            <SkillContainer
              sourceLink="https://godotengine.org/"
              iconClass={"devicon-godot-plain-wordmark"}
            />
            <SkillContainer
              sourceLink="https://en.wikipedia.org/wiki/JavaScript"
              iconClass={"devicon-javascript-plain"}
            />
            <SkillContainer
              sourceLink="https://isocpp.org/"
              iconClass={"devicon-cplusplus-plain"}
            />
            <SkillContainer
              sourceLink="https://www.qt.io/"
              iconClass={"devicon-qt-original"}
            />
            <SkillContainer
              sourceLink="https://godotengine.org/"
              iconClass={"devicon-godot-plain-wordmark"}
            />
            <SkillContainer
              sourceLink="https://en.wikipedia.org/wiki/JavaScript"
              iconClass={"devicon-javascript-plain"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
