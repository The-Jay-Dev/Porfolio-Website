import React from "react";
import SkillContainer from "./SkillContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";

const Skills = () => {
  return (
    <div>
      <div className="bg-transparent border-t-4 border-b-4 h-[15vh] w-full flex justify-center">
        <motion.div
          variants={fadeIn(0.4, "up")}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: true, amount: 0 }}
          className="w-[50%] h-full"
        >
          <div className="flex justify-center items-center h-full gap-7 lg:gap-0">
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
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
