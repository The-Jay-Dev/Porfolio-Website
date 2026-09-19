import React from "react";
import Section from "./Section";
import SkillContainer from "./SkillContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";
import BioWindow from "./BioWindow";

const AboutMe = () => {
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
              variants={fadeIn(0.4)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: true, amount: 0 }}
            >
              <h1 className="text-white font-primary text-3xl xl:text-7xl sm:!text-5xl text-center font-bold w-[12ch] sm:w-[24ch]">
                I'm Jadon,
                <br /> a passionate software developer
              </h1>
            </motion.div>

            <motion.div
              variants={fadeIn(0.6)}
              whileInView={"show"}
              initial="hidden"
              viewport={{ once: true, amount: 0 }}
            >
              <p className="text-center text-[1.3rem] sm:text-2xl! sm:text-center  font-secondary  md:text-[1.8rem]! xl:text-[1.1rem]! mt-7  text-white/90 text-pretty w-[30ch] sm:w-[40ch] lg:w-[50ch] xl:w-[60ch] font-light ">
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

          {/* <div className="w-full h-full" /> */}
          {/* <div className="z-10 bg-fixed h-full w-full flex items-center justify-center"> */}
          {/* <div className="w-full h-full container flex justify-center"> */}
          {/* <motion.div
            variants={fadeIn(0.2, "up")}
            whileInView={"show"}
            initial="hidden"
            viewport={{ once: true, amount: 0 }}
            className="flex flex-col justify-center items-center w-full mb-12 mt-12"
            >
            <h1 className="md:h1 text-center font-primary text-4xl sm:!text-4xl !font-light italic">
            About
            </h1>
            
            <div className="w-[80%] h-0.5 bg-gradient-to-r from-transparent via-white to-transparent" />
            </motion.div> */}
          {/* <div className=" w-screen flex sm:flex-col md:flex-row justify-center items-center lg:gap-6 sm:gap-24 mx-6 ">
        <motion.div
        variants={fadeIn(0.4, "left")}
        whileInView={"show"}
        initial="hidden"
        viewport={{ once: true, amount: 0 }}
        className="w-1/2 hidden flex justify-center sm:hidden xl:flex"
        >
        <img
        src="/Selfie2.jpg"
        alt="Jay Image"
        className="transition hover:scale-[102%] w-[70%] lg:w-[70%] md:w-full sm:w-[70%] lg:object-fit sm:object-cover rounded-4xl "
        />
        </motion.div>
      </div> */}
          {/* </div> */}
          {/* </div> */}
        </Section>
      </div>
    </div>
  );
};

export default AboutMe;
