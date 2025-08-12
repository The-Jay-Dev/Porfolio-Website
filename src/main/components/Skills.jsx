import React from "react";
import Section from "./Section";
import SkillContainer from "./SkillContainer";

const MemoryStates = () => {
  return (
    <Section className="relative flex flex-col justify-center items-center gap-6  text-gray-200 mx-auto ">
      <h1 className="text-white">Skills</h1>
      <div className="flex flex-col gap-24 py-12 px-6 grid-rows-2 w-[60%] h-full rounded-tl-4xl">
        <SkillContainer skill="C++" percentage={40} containerWidth="w-[40%]" />
        <SkillContainer skill="Qt" percentage={50} containerWidth="w-[50%]" />
        <SkillContainer
          skill="Javascript"
          percentage={15}
          containerWidth="w-[15%]"
        />
        <SkillContainer
          skill="Godot"
          percentage={25}
          containerWidth="w-[25%]"
        />
      </div>
    </Section>
  );
};

export default MemoryStates;
