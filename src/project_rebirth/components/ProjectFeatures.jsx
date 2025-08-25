import React from "react";
import Carousel from "./Carousel";
import Section from "./Section";
import { useState } from "react";

const Features = () => {
  const slides = [
    { id: 0, url: "./src/website_assets/TapNotes.png" },
    { id: 1, url: "./src/website_assets/DoubleTapNote.png" },
    { id: 2, url: "./src/website_assets/HoldNotes.png" },
    { id: 3, url: "./src/website_assets/ForgottenNote.png" },
  ];

  const slideTexts = [
    "Tap notes are the shining stars of rhythm gameplay. Each one is color-coded based on its timing: Blue for a full beat, Yellow for half a beat, and Pink for a third of a beat. Light up the correct lane with perfect timing to score points and build your combo!",
    "Double Tap notes add a twist to your rhythm skills! Tap once to lock them in place, and tap again when the judgement ring matches the note's size to finish the job!",
    "This time around, these bad boys come in two electrifying forms: hold notes and slide notes. Lock in and hold the lane 'til the note pops to rack up points! But if the trail appears slanted, you’ve got a slide note on your hands. Use your mouse to guide the core along the path and ride the rhythm all the way through!",
    "Regret fills the air! These notes are bad news... avoid them at all costs to keep your score intact!",
  ];

  const [currentText, setCurrentText] = useState(slideTexts[0]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const next = () => {
    setCurrentSlideIndex((currentSlideIndex) => {
      const nextIndex =
        currentSlideIndex < slides.length - 1 ? currentSlideIndex + 1 : 0;
      setCurrentText(slideTexts[nextIndex]);
      console.log(nextIndex, currentSlideIndex, slides.length);
      return nextIndex;
    });
  };
  const previous = () => {
    setCurrentSlideIndex((currentSlideIndex) => {
      const nextIndex =
        currentSlideIndex > 0 ? currentSlideIndex - 1 : slides.length - 1;
      setCurrentText(slideTexts[nextIndex]);
      return nextIndex;
    });
  };

  return (
    <Section className="relative mx-auto flex  h-screen items-center justify-center overflow-hidden">
      <div className=" absolute  z-0 w-full h-full">
        <img
          src="./src/website_assets/RebirthPurityBG.png"
          className="z-0 w-full h-full"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative h-[80%] w-[60%] flex flex-col justify-center items-center gap-6">
        <h1 className="text-white text-shadow-sm mb-10">Note Types</h1>
        <div className="flex  justify-center items-center h-fit w-full overflow-visible ">
          <div className="sm:!w-[80%] md:w-[60%] xl:!w-[50%] aspect-[4/2] overflow-visible">
            <Carousel
              className="z-2"
              slides={slides}
              slideIndex={currentSlideIndex}
            />

            <div className="absolute inset-0 flex items-center justify-between p-4">
              <button
                onClick={previous}
                className="p-1 rounded-full shadow bg-black/50
          transition hover:scale-[110%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon text-white w-12 h-12"
                  viewBox="0 0 512 512"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={24}
                >
                  <path d="M328 112L184 256l144 144" />
                </svg>
              </button>
              <button
                onClick={next}
                className="p-1 rounded-full shadow bg-black/50
          transition hover:scale-[110%]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ionicon text-white w-12 h-12"
                  viewBox="0 0 512 512"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={24}
                >
                  <path d="M184 112l144 144-144 144" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center h-[20%]">
          <p className="mt-12 sm:!text-[1.2rem] xl:!text-[1.2rem] sm:w-[40ch] lg:w-[80ch] xl:w-[100ch]  xl:!text-3xl py-7 text-center text-shadow-black font-medium  text-wrap break-words text-white">
            {currentText}
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Features;
