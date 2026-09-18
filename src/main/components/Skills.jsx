import React from "react";
import SkillContainer from "./SkillContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex overflow-hidden! flex-col justify-center items-center bg-home-bg-primary "
    >
      <h1 className="p-16 text-start tracking-wider font-primary text-9xl sm:text-5xl! font-black! z-1">
        My Skills
        <h1 className="absolute xl:block hidden left-1/2 text-[18rem]! text-home-bg-secondary/80!">
          SKILLS
        </h1>
      </h1>
      <motion.div
        variants={fadeIn(0.4, "up")}
        whileInView={"show"}
        initial="hidden"
        viewport={{ once: true, amount: 0 }}
        className="w-full h-full z-10"
      >
        <div className="w-full flex justify-center items-center h-fit pt-24 pb-24">
          <div className="mt-2 mb-16 flex flex-col md:grid md:grid-cols-4 md:grid-rows-2 justify-center items-center h-fit md:gap-16 gap-16 xl:gap-32">
            <SkillContainer
              sourceLink="https://isocpp.org/"
              iconClass={"devicon-cplusplus-plain"}
            />
            <SkillContainer
              sourceLink="https://isocpp.org/"
              iconClass={"devicon-javascript-plain"}
            />

            <SkillContainer
              sourceLink="https://en.wikipedia.org/wiki/HTML"
              iconClass={"devicon-html5-plain"}
            />

            <SkillContainer
              sourceLink="https://www.qt.io/"
              iconClass={"devicon-qt-original"}
            />
            <SkillContainer
              sourceLink="https://react.dev/"
              iconClass={"devicon-react-original"}
            />

            <SkillContainer
              sourceLink="https://tailwindcss.com/"
              iconClass={"devicon-tailwindcss-original"}
            />
            <SkillContainer
              sourceLink="https://godotengine.org/"
              iconClass={"devicon-godot-plain-wordmark"}
            />

            <SkillContainer
              sourceLink="https://www.adobe.com/products/photoshop.html?promoid=RBS7NL7F&mv=other"
              iconClass={"devicon-photoshop-plain"}
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
