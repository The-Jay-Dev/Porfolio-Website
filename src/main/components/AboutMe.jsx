import React, { useEffect, useState } from "react";
import Section from "./Section";
import SkillContainer from "./SkillContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";
import BioWindow from "./BioWindow";
import { useScramble } from "use-scramble";

const AboutMe = () => {
  const [bioText, setBioText] = useState("");
  const { ref } = useScramble({
    overflow: false,
    text: bioText,
    speed: 0.5,
  });

  const handleScroll = () => {
    const sectionTop =
      document.querySelector("#aboutMe").getBoundingClientRect().top +
      window.scrollY;
    if (window.scrollY >= sectionTop - 600) {
      console.log("SCROLL");
      window.removeEventListener("scroll", handleScroll);
      setBioText(`I'm Jadon, a passionate software developer`);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <div id="aboutMe" className="bg-home-bg-secondary bg-cover z-5 w-full">
      <h1 className="absolute -translate-y-20 xl:block hidden left-0 text-[18rem]! text-home-bg-primary/80! z-1">
        ABOUT
      </h1>

      <div className="flex-col flex justify-center items-center">
        <div className="absolute z-0 bg-fixed flex-col justify-center w-full h-full" />
        <Section
          id="aboutMe"
          className="xl:gap-24 flex justify-center h-screen items-center w-full md:w-[90%] xl:w-[90%] z-5"
        >
          <div className="xl:block hidden w-full ">
            <img
              src="/DeskSetupPfp.jpg"
              className="object-fill hidden w-full h-full md:block pt-48 pb-48 rounded"
            />
          </div>

          <div className="h-screen w-full flex flex-col justify-center items-center gap-6 ">
            <motion.div
              variants={fadeIn(0)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: true, amount: 0 }}
            >
              <h1
                ref={ref}
                className="text-white font-primary text-3xl xl:text-7xl sm:!text-5xl text-center font-bold w-[12ch] sm:w-[24ch]"
              ></h1>
            </motion.div>

            <motion.div
              variants={fadeIn(1)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: true, amount: 0 }}
            >
              <p className="text-center text-[1.1rem] sm:text-2xl! sm:text-center  font-secondary  md:text-[1.8rem]! xl:text-[1.1rem]! mt-7  text-white/90 text-pretty w-[30ch] sm:w-[40ch] lg:w-[50ch] xl:w-[60ch] font-light ">
                I’m Jadon (Jay), a self-taught software developer who enjoys
                transforming ideas into stunning, modern applications that blend
                creativity with clean code. I specialize in C++, Javascript and
                Qt development, building everything from engaging video games to
                innovative desktop apps. Recently, I've been developing{" "}
                <a
                  href="/projectRebirth"
                  rel="noopener noreferrer"
                  className="hover:text-purple-800 text-home-accent-primary"
                >
                  Rebirth
                </a>
                , a rhythm game build entirely with the Qt framework, fueling my
                ever-growing passion for music and programming.
              </p>
            </motion.div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default AboutMe;
