import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";

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
    <button
      onClick={() => (window.location.href = btnUrl)}
      className={`${extraClassNames} relative container hover:cursor-pointer h-full w-full rounded-2xl overflow-hidden`}
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
        <div className="w-full absolute inset-0  hover:bg-black/50 bg-transparent transition opacity-90">
          <motion.div
            whileHover={{ opacity: 100, y: -10 }}
            initial={{ opacity: 0, y: 40 }}
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col justify-end items-start w-full h-full gap-2 mx-6"
          >
            <h3 className="!text-3xl  font-primary !font-light">
              {projectTitle}
            </h3>
            <p className="text-start   font-primary !font-light  w-[40ch]">
              {description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </button>
  );
};

export default ProjectContainer;
