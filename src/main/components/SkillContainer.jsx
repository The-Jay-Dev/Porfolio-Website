import React from "react";

const SkillContainer = ({ skill, percentage, containerWidth }) => {
  return (
    <div className="flex justify-center gap-6 ">
      <h1 className="text-white sm:!text-3xl lg:!text-4xl ">{skill}</h1>
      <div
        className={`${containerWidth} main-primary-bg-color glow-accent`}
      ></div>
      <h1 className="text-white sm:!text-3xl lg:!text-2xl ">{percentage}%</h1>
    </div>
  );
};

export default SkillContainer;
