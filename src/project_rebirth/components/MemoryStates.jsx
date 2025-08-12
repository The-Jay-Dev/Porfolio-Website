import React from "react";
import Section from "./Section";

const MemoryStates = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto w-screen">
      <Section className="relative flex flex-col justify-center items-center gap-6 bg-[url('./src/website_assets/RebirthLifeBG.png')] bg-no-repeat bg-center bg-cover text-gray-200 mx-auto w-full ">
        <h1 className="mt-24  text-black">Memory States</h1>
        <div className="sm:w-[90%] md:flex md:flex-col xl:w-[90%] xl:grid xl:grid-cols-3 gap-24 py-12 px-6 grid-rows-2  h-full justify-center items-center ">
          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-black  md:!text-4xl lg:!text-2xl">Nostalgia</h2>
            <img
              src="./src/website_assets/Nostalgia.png"
              className="sm:object-fit sm:w-[50%] lg:w-[30%] xl:w-[50%]"
            ></img>

            <p className="font-medium lg:col-span-1 lg:mb-8  sm:!text-[1.2rem]  md:!text-2xl sm:text-center lg:!text-lg xl:w-[30ch] col-span-1 w-[50ch] mx-auto mb-6 text-black ">
              Feelings of nostalgia arise as you relive the classic rhythm
              gameplay you know and love. Nostalgia is filled with tap and hold
              notes as far as the eye can see.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-black  md:!text-4xl lg:!text-2xl">Euphoria</h2>
            <img
              src="./src/website_assets/Euphoria.png"
              className="sm:object-fit sm:w-[50%] lg:w-[30%] xl:w-[50%]"
            ></img>

            <p className="font-medium lg:col-span-1 sm:!text-[1.2rem]   md:!text-2xl sm:text-center lg:mb-8 lg:!text-lg xl:w-[30ch] col-span-1 w-[50ch]  mx-auto mb-6 text-black ">
              Excitement builds as Tap and Hold notes flood the map! Keep an eye
              out — Double Tap notes might make a surprise appearance too...
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-black sm:!text-[1.2rem]  md:!text-4xl lg:!text-2xl">
              Bliss
            </h2>
            <img
              src="./src/website_assets/Bliss.png"
              className="sm:object-fit sm:w-[50%] lg:w-[30%] xl:w-[50%]"
            ></img>

            <p className="font-medium lg:col-span-1 col-span-1 w-[50ch] sm:!text-[1.2rem]   md:!text-2xl sm:text-center lg:!text-lg xl:w-[30ch]   mx-auto mb-6 text-black lg:mb-8">
              Bliss is unmatched — just pure satisfaction as you glide through
              streams of only Hold and Slide notes.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-black  md:!text-4xl lg:!text-2xl">Fracture</h2>
            <img
              src="./src/website_assets/Fracture.png"
              className="sm:object-fit sm:w-[50%] lg:w-[30%] xl:w-[50%]"
            ></img>

            <p className="font-medium lg:col-span-1 col-span-1 w-[50ch] sm:!text-[1.2rem] md:!text-2xl sm:text-center xl:w-[30ch]  lg:!text-lg  mx-auto mb-6 text-black lg:mb-8">
              Put on your game face — Fracture cranks the difficulty up a notch
              (or two).
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-black  md:!text-4xl lg:!text-2xl">Paradox</h2>
            <img
              src="./src/website_assets/Paradox.png"
              className="sm:object-fit sm:w-[50%] lg:w-[30%] xl:w-[50%]"
            ></img>

            <p className="font-medium lg:col-span-1 col-span-1 w-[50ch] sm:!text-[1.2rem] md:!text-2xl sm:text-center lg:!text-lg  xl:w-[30ch]  mx-auto mb-6 text-black lg:mb-8">
              Paradox throws your game into chaos! Carefully navigate through
              streams of forgotten notes to keep your score intact.
            </p>
          </div>

          <div className="flex flex-col justify-center items-center gap-6">
            <h2 className="text-black  md:!text-4xl lg:!text-2xl">Confusion</h2>
            <img
              src="./src/website_assets/Confusion.png"
              className="sm:object-fit sm:w-[50%] lg:w-[30%] xl:w-[50%]"
            ></img>

            <p className="font-medium lg:col-span-1 col-span-1 w-[50ch] sm:!text-[1.2rem]   md:!text-2xl sm:text-center lg:!text-lg xl:w-[30ch]   mx-auto mb-6 text-black lg:mb-8">
              Confusion tosses the rules aside — like a surprise party, you
              never know what’s coming next.
            </p>
          </div>
        </div>
      </Section>
      <div className="h-0.5 w-full bg-white z-3 "></div>
    </div>
  );
};

export default MemoryStates;
