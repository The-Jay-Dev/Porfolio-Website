import React from "react";
import Section from "./Section";
const About = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto w-screen">
      <Section className="relative flex w-full justify-center ">
        <div className=" absolute  z-0 h-screen w-full">
          <img src="/RebirthPurityBG.png" className="z-0 h-full w-full" />
          <div className="absolute inset-0 bg-black/1" />
        </div>

        <div className=" mx-6 flex sm:flex-col lg:flex-row sm:gap-6 xl:gap-12 items-center justify-center w-screen text-black/80">
          <div className="relative z-10 flex flex-col gap-6 items-center justify-center">
            <h1 className="w-full md:h1 sm:text-center md:w-[20ch] md:!text-6xl lg:!text-4xl xl:!text-6xl  xl:text-center  mb-6">
              In Rebirth, Memories Come Alive!
            </h1>
            <p className="mx-auto mb-6 font-semibold sm:text-center sm:!text-[1.2rem] lg:text-start xl:text-center lg:w-[50ch] lg:!text-[1.2rem] xl:!text-2xl">
              Rebirth is a rhythm game where memories unravel new and exciting
              experiences. Dive into your favorite maps as shifting memory
              states test both your timing and reflexes.
            </p>
          </div>

          <div className="sm:w-[80%] lg:w-[50%] xl:!w-[50%]">
            <video
              autoPlay
              loop
              playsInline
              muted
              src="/RebirthDemo2.mp4"
              alt="Rebirth Demo Video"
              className="object-fit relative rounded-lg shadow-md md:mt-20"
            ></video>
          </div>
        </div>

        <button></button>
      </Section>
      <div className="h-0.5 w-full bg-white z-3 "></div>
    </div>
  );
};

export default About;
