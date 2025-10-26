import React from "react";
import Section from "./Section";
import SkillContainer from "./SkillContainer";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";

const MemoryStates = () => {
  return (
    <Section className="relative flex justify-center items-center w-screen overflow-hidden">
      <div className="blur-2xl bg-[url('/Desk.jpg')] absolute bg-no-repeat bg-cover w-full h-full" />
      <div className="z-10 bg-fixed h-full w-full bg-[#918c7a]/80 flex items-center justify-center">
        <div className="w-full h-full container flex justify-center">
          <div className=" w-screen flex sm:flex-col md:flex-row justify-center items-center lg:gap-6 sm:gap-24 mx-6 ">
            <div className="h-screen flex flex-col justify-center items-center w-1/2 gap-6 ">
              <motion.div
                variants={fadeIn(0.4)}
                whileInView={"show"}
                initial="hidden"
                viewport={{ once: true, amount: 0 }}
              >
                <h1 className="text-white font-primary xl:!text-7xl sm:!text-5xl text-center !font-light italic w-[15ch]">
                  Software Developer and Youtuber
                </h1>
              </motion.div>

              <motion.div
                variants={fadeIn(0.6)}
                whileInView={"show"}
                initial="hidden"
                viewport={{ once: true, amount: 0 }}
              >
                <p className="text-center sm:text-center xl:text-start font-primary italic lg:!text-[1.5rem] xl:!text-[1.2rem] mt-7  text-white/90 text-[100%] text-pretty w-[40ch] sm:w-[40ch] lg:w-[50ch] xl:w-[60ch] font-light ">
                  I’m Jadon (Jay), a self-taught software developer who enjoys
                  transforming ideas into stunning, modern applications that
                  blend creativity with clean code. I specialize in C++ and Qt
                  development, building everything from engaging video games to
                  innovative desktop apps. Recently, I've been developing{" "}
                  <a
                    href="/projectRebirth"
                    rel="noopener noreferrer"
                    className="hover:text-purple-800 text-black"
                  >
                    Rebirth
                  </a>
                  , a rhythm game build entirely with the Qt framework, fueling
                  my ever-growing passion for music and programming.
                </p>
              </motion.div>
            </div>

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
          </div>
        </div>
      </div>
    </Section>
  );
};

export default MemoryStates;
