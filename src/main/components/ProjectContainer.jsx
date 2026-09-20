import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";
import Tilt from "react-parallax-tilt";

const ProjectContainer = ({
  source,
  tag,
  description,
  altText,
  projectTitle,
  btnUrl,
  extraClassNames,
}) => {
  const [onClick, setOnClick] = useState(false);

  return (
    <Tilt perspective={1500}>
      <button
        onClick={() => (window.location.href = btnUrl)}
        className={`${extraClassNames} container hover:cursor-pointer relative h-48 lg:h-96 w-full overflow-hidden rounded-2xl`}
      >
        <motion.div
          variants={fadeIn(0)}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: true, amount: 0 }}
          className="w-full h-full bg-black"
        >
          <img
            className=" object-cover w-full h-full"
            src={source}
            alt={altText}
          />
          <div className="w-full absolute inset-0 bg-linear-to-tr from-black to-transparent from-10% to-70% hover:bg-home-accent-primary/50 bg-transparent transition opacity-90">
            <div className="flex flex-col justify-end items-start w-full h-full gap-2 pb-8 mx-6">
              <motion.div
                variants={fadeIn(0.5, "up", 1.2)}
                whileInView={"show"}
                initial="hidden"
                viewport={{ once: true, amount: 0 }}
              >
                <div className="flex flex-col justify-center items-start">
                  <h3 className="text-[0.8rem] lg:text-3xl!  font-primary font-light!">
                    {projectTitle}
                  </h3>
                  <div className="h-0.5 bg-white w-[120%]" />
                </div>
              </motion.div>

              <motion.div
                variants={fadeIn(1.5, "right")}
                whileInView={"show"}
                initial="hidden"
                viewport={{ once: true, amount: 0 }}
              >
                <p className="text-start text-[0.8rem] lg:text-[1rem] z-20 font-secondary font-light!  w-[26ch] lg:w-[40ch]">
                  {description}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </button>
    </Tilt>
  );
};

export default ProjectContainer;
