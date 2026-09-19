import React, { useRef, useState } from "react";
import Section from "./Section";
import CallToActionButton from "./CallToActionButton";
import SocialsGroup from "./SocialsGroup";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";
import NavigationTracker from "./NavigationTracker";
import { homeNavigation } from "../../constants/PrimaryNavigation";
import InfoPopup from "./InfoPopup";
import DownloadResumeButton from "./DownloadResumeButton";

const Hero = () => {
  const fadeInDelay = 0.4;
  const fadeInModerateDelay = 1.5;
  const fadeInLateDelay = 3;
  const [cursor, setCursor] = useState(0);
  const navigationOffsetY = 600;

  const NAVIGATION_LOCATION = homeNavigation.reduce(
    (accumulate, destination) => ({
      ...accumulate,
      [destination.title]: destination.index,
    }),
    {},
  );

  window.addEventListener("wheel", () => {
    const aboutSectionTop =
      document.querySelector("#aboutMe").getBoundingClientRect().top +
      window.scrollY;
    const projectSectionTop =
      document.querySelector("#projects").getBoundingClientRect().top +
      window.scrollY;
    const skillsSectionTop =
      document.querySelector("#skills").getBoundingClientRect().top +
      window.scrollY;
    console.log(cursor);

    if (window.scrollY >= projectSectionTop - navigationOffsetY) {
      setCursor(1);
      if (window.scrollY >= aboutSectionTop - navigationOffsetY) {
        setCursor(2);
      }
      if (window.scrollY >= skillsSectionTop - navigationOffsetY) {
        setCursor(3);
      }
    } else {
      setCursor(0);
    }
  });
  return (
    <div className="relative overflow-hidden">
      <video
        autoPlay
        loop
        playsInline
        muted
        className="object-cover w-full h-full absolute z-0"
        src="/JDevHomePreview.mp4"
      />
      <NavigationTracker cursor={cursor} className="z-50" />

      <div className="flex flex-col justify-center items-center z-5">
        <Section className=" flex justify-center items-center w-screen h-screen">
          <div className="w-screen h-screen absolute bg-linear-to-b z-1  from-home-bg-primary/70 via-home-bg-primary/30 to-home-bg-primary" />
          <div className="justify-center absolute bottom-0 mb-12 flex w-full h-full  lg:h-2/12 items-center">
            <InfoPopup />
            <div className="lg:w-2/4 hidden h-full" />
            <div className=" z-1 flex flex-col justify-center items-center lg:w-1/2  ">
              <div className="flex flex-col items-center justify-center gap-2">
                <motion.div
                  variants={fadeIn(fadeInModerateDelay, "up")}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <h1 className="text-white tracking-wider font-primary text-[3rem]! md:text-7xl! lg:text-5xl! sm:text-8xl! text-center font-black! w-fit! md:w-[10ch] ">
                    Jadon Montgomery
                  </h1>
                </motion.div>

                <motion.div
                  variants={fadeIn(fadeInModerateDelay, "up")}
                  whileInView={"show"}
                  initial="hidden"
                  viewport={{ once: true, amount: 0 }}
                >
                  <h2 className="text-white tracking-[0.2em]! font-primary lg:text-3x1 text-[1.3rem] sm:text-[1.6rem] font-extralight! text-center w-[32ch]">
                    Full-Stack Developer
                  </h2>
                </motion.div>

                <motion.div
                  variants={fadeIn(fadeInModerateDelay + 1, "up")}
                  whileInView="show"
                  initial="hidden"
                  viewport={{ once: true }}
                >
                  <DownloadResumeButton />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="bg-fixed h-full w-full flex items-center justify-center pt-20">
            <div className="w-full h-full container flex justify-center">
              <div className=" lg:gap-12 w-screen flex flex-col sm:flex-col xl:flex-row justify-center items-center mx-6 "></div>
            </div>
          </div>
        </Section>
        {/* <div className="h-0.5 w-full bg-white  "></div> */}
      </div>
    </div>
  );
};

export default Hero;
