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
    <Tilt>
      <button
        onClick={() => (window.location.href = btnUrl)}
        className={`${extraClassNames} container hover:cursor-pointer h-full w-full overflow-hidden`}
      >
        <motion.div
          variants={fadeIn(0.6)}
          whileInView={"show"}
          initial="hidden"
          viewport={{ once: true, amount: 0 }}
          className="w-full h-full bg-black"
        >
          <img
            className="h-full w-full object-cover"
            src={source}
            alt={altText}
          />
          <div className="w-full absolute inset-0 bg-linear-to-tr from-black to-transparent from-10% to-70% hover:bg-home-accent-primary/50 bg-transparent transition opacity-90">
            <div
              // whileHover={{ opacity: 100, y: -10 }}
              //  initial={{ opacity: 0, y: 40 }}
              // viewport={{ once: true, amount: 0 }}
              className="flex flex-col justify-end items-start w-full h-full gap-2 pb-8 mx-6"
            >
              <div className="flex flex-col justify-center items-start">
                <h3 className="text-3xl!  font-primary font-light!">
                  {projectTitle}
                </h3>
                <div className="h-0.5 bg-white w-[120%]" />
              </div>
              <p className="text-start font-secondary font-light!  w-[40ch]">
                {description}
              </p>
            </div>
          </div>
        </motion.div>
      </button>
    </Tilt>
  );
};

export default ProjectContainer;
