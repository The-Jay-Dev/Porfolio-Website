import React, { useEffect } from "react";
import Section from "./Section";
import DownloadButton from "./DownloadButton";
const Hero = () => {
  useEffect(() => {
    const rebirthVideo = document.getElementById("bgVideo");
    const fallbackImg = document.getElementById("fallbackImg");

    rebirthVideo.addEventListener("error", () => {
      rebirthVideo.style.display = "none";
      fallbackImg.classList.remove("hidden");
    });
  });

  return (
    <div className="flex flex-col justify-center items-center h-auto w-screen">
      <Section className="mt-24 relative flex w-full flex-col justify-center items-center">
        <div className="absolute inset-0 h-full bg-gradient-to-b from-[#1a1a1a]/80 to-[#3b3b3b]/80 z-1" />

        <video
          id="bgVideo"
          className="z-0 absolute top-0 left-0 w-full h-screen object-cover "
          autoPlay
          playinline="true"
          muted
          loop
        >
          <source src="/RebirthDemo.mp4" type="video/webm" />
        </video>
        <img
          src="/RebirthGameplayFallback.png"
          className="z-0 absolute top-0 left-0 w-full h-screen object-cover hidden"
          alt="Rebirth Particles GIF"
        />
        <div className="w-full h-full flex flex-col justify-center items-center md: gap-24">
          <div className=" w-[90%] sm:w-[80%] lg:w-[80%] xl:w-[50%] h-full object-fit z-1 flex flex-col gap-6 justify-center items-center ">
            <img
              id="fallbackImg"
              className="w-full h-full"
              src="/RebirthLogo.png"
              alt="Rebirth Logo"
            ></img>
          </div>

          <DownloadButton
            btnText="Download on Github"
            btnSubText="Windows 64x"
          ></DownloadButton>
        </div>
      </Section>
      <div className="h-0.5 w-full bg-white z-3 "></div>
    </div>
  );
};

export default Hero;
