import React from "react";
import Section from "./Section";
import JayDevLogo from "../../website_assets/JayDevLogo.png";
import CallToActionButton from "./CallToActionButton";
import SocialsGroup from "./SocialsGroup";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center ">
      <Section className="relative container bg-neutral-800  pt-8 flex justify-center items-center">
        <div className=" w-screen flex justify-center items-center gap-6  mx-6 ">
          <div className="h-screen flex flex-col justify-center items-center w-1/2 gap-6 ">
            <div className="flex flex-col items-center justify-center">
              <h1 className="!font-bold lg:text-start md:text-center sm:text-center ">
                <span>Welcome, I'm</span>{" "}
                <span className="text-[#15eadc]">Jadon</span>
              </h1>

              <h2 className="!font-medium text-center">
                A Passionate Software Developer
              </h2>
            </div>

            <p className=" lg:!text-[1rem] xl:!text-[1rem] mt-7 text-white/90 text-[90%] text-pretty md:max-w-[80ch] sm:max-w-[40ch] mx-auto  font-medium ">
              I’m Jadon (Jay), a self-taught software developer who enjoys
              transforming ideas into stunning, modern applications that blend
              creativity with clean code. I specialize in C++ and Qt
              development, building everything from engaging video games to
              innovative desktop apps. Recently, I've been developing{" "}
              <a
                href="/projectRebirth"
                rel="noopener noreferrer"
                className="hover:text-purple-400 text-blue-400"
              >
                Rebirth
              </a>
              , a rhythm game build entirely with the Qt framework, fueling my
              ever-growing passion for music and programming.
            </p>

            <SocialsGroup topMargin="mt-12" />

            <CallToActionButton initialText="Contact Me"></CallToActionButton>
          </div>

          <div className="w-1/2 flex justify-center">
            <img
              src="./src/website_assets/PfpSquareTransparent.png"
              alt="Jay Image"
              className=" glow lg:w-[60%] md:w-[80%] sm:w-[70%] h-[60%] object-fit rounded-full border-4"
            />
          </div>
        </div>
      </Section>
      <div className="h-0.5 w-full bg-neutral-700 mb-12  "></div>
    </div>
  );
};

export default Hero;
