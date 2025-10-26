import React from "react";
import Section from "./Section";
import CallToActionButton from "./CallToActionButton";
import SocialsGroup from "./SocialsGroup";
import { motion } from "framer-motion";
import { fadeIn } from "../../AnimationStates";

const Hero = () => {
  const fadeInDelay = 0.4;
  const fadeInModerateDelay = 1.5;
  const fadeInLateDelay = 3;
  return (
    <div className="flex flex-col justify-center items-center ">
      <Section className="relative bg-fixed bg-[url('/Desk.jpg')] bg-no-repeat bg-cover flex justify-center items-center w-screen h-screen">
        <div className="bg-fixed h-full w-full bg-black/50 flex items-center justify-center">
          <div className="w-full h-full container flex justify-center">
            <div className=" lg:gap-12 w-screen flex flex-col sm:flex-col xl:flex-row justify-center items-center mx-6 ">
              <div className="w-full flex justify-center items-center xl:hidden">
                <img
                  src="/Selfie.png"
                  alt="Jay Image"
                  className="w-[30%] lg:w-[20%] object-fit rounded-4xl "
                />
              </div>

              <div className="xl:h-screen sm:h-[50vh] flex flex-col justify-center items-center w-1/2 gap-6 ">
                <div className="flex flex-col items-center justify-center">
                  <motion.div
                    variants={fadeIn(fadeInDelay, "up")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <h1 className="font-primary mb-2 lg:!text-5xl sm:!text-4xl !font-light italic lg:text-start md:text-center sm:text-center ">
                      <span>Welcome, I'm</span>
                    </h1>
                  </motion.div>

                  <motion.div
                    variants={fadeIn(fadeInModerateDelay, "up")}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <h1 className="text-white font-primary lg:!text-7xl md:!text-6xl sm:!text-5xl text-center !font-semibold italic w-[20ch]">
                      Jadon Montgomery
                    </h1>
                  </motion.div>

                  <motion.div
                    variants={fadeIn(fadeInModerateDelay, "up")}
                    whileInView={"show"}
                    initial="hidden"
                    viewport={{ once: true, amount: 0 }}
                  >
                    <h2 className="text-[#7de2d1] font-primary lg:!text-3xl sm:!text-2xl !font-extralight text-center tracking-widest italic">
                      Software Engineer
                    </h2>
                  </motion.div>
                </div>

                <motion.div
                  variants={fadeIn(fadeInLateDelay)}
                  initial="hidden"
                  whileInView={"show"}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <p className="font-primary text-center lg:!text-[1.1rem] xl:!text-[1.1rem] mt-2 text-white/90 text-[90%] text-pretty md:max-w-[80ch] sm:max-w-[30ch] mx-auto  font-light ">
                    A passionate software developer and youtuber, striving to
                    grow and inspire.
                  </p>
                </motion.div>
                <motion.div
                  variants={fadeIn(fadeInLateDelay)}
                  whileInView={"show"}
                  initial="hidden"
                  viewport={{ once: true, amount: 0 }}
                >
                  <SocialsGroup topMargin="mt-4" />
                </motion.div>

                <motion.div
                  variants={fadeIn(fadeInLateDelay)}
                  whileInView={"show"}
                  initial="hidden"
                  viewport={{ once: true, amount: 0 }}
                >
                  <CallToActionButton initialText="Contact Me"></CallToActionButton>
                </motion.div>
              </div>

              <motion.div
                variants={fadeIn(fadeInDelay, "right")}
                whileInView={"show"}
                initial="hidden"
                viewport={{ once: true, amount: 0 }}
                className="w-1/2 flex justify-center hidden sm:hidden xl:flex "
              >
                <img
                  src="/Selfie.png"
                  alt="Jay Image"
                  className=" lg:w-[70%] lg:h-[60%] object-fit rounded-4xl  hover:scale-[102%] transition"
                />
              </motion.div>
            </div>
          </div>
        </div>
      </Section>
      <div className="h-0.5 w-full bg-white  "></div>
    </div>
  );
};

export default Hero;
