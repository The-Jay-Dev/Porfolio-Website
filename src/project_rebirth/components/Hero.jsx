import React from "react";
import Section from "./Section";
import DownloadButton from "./DownloadButton";
const Hero = () => {
  return (
    <div className="flex flex-col justify-center items-center h-auto w-screen">
      <Section className="mt-24 relative flex w-full flex-col justify-center items-center">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-[#1a1a1a]/80 to-[#3b3b3b]/80 z-1" />

        <video
          className="z-0 absolute top-0 left-0 w-full h-screen object-cover "
          autoPlay
          playinline="true"
          muted
          loop
        >
          <source src="/RebirthDemo.mp4" type="video/webm" />
          <img
            src="/RebirthMainBG.png"
            className="z-0 h-full  w-full"
            alt="Rebirth Particles GIF"
          />
        </video>
        <div className="w-full h-full flex flex-col justify-center items-center md: gap-24">
          <div className=" sm:w-[80%] lg:w-[80%] xl:w-[50%] h-full object-fit z-1 flex flex-col gap-6 justify-center items-center ">
            <img
              className="w-full h-full"
              src="./src/website_assets/RebirthLogo.png"
              alt="Rebirth Logo"
            ></img>
          </div>

          <DownloadButton
            btnText="Download on Github"
            btnSubText="Windows 64x"
            className="inline-block xl:w-[25rem]"
          ></DownloadButton>
        </div>
      </Section>
      <div className="h-0.5 w-full bg-white z-3 "></div>
    </div>
  );
};

export default Hero;
