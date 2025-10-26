import React, { useState } from "react";
import Section from "./Section";
import DownloadButton from "./DownloadButton";
import { useEffect } from "react";
const CallToAction = () => {
  useEffect(() => {
    const rebirthVideo = document.getElementById("bgVideo");
    const fallbackImg = document.getElementById("fallbackImg");

    rebirthVideo.addEventListener("error", () => {
      video.style.display = "none";
      fallbackImg.classList.remove("hidden");
    });
  });

  const [BGSrc, setBGSrc] = useState();
  return (
    <div className="flex flex-col justify-center items-center h-auto w-screen">
      <Section className=" relative mx-auto bg-black-800 flex flex-col justify-center items-center w-full">
        <div className=" absolute  z-0 h-full w-full">
          <video
            className="z-0 absolute top-0 left-0 w-full h-screen object-cover "
            autoPlay
            playinline="true"
            muted
            loop
          >
            <source src="/RebirthParticles.mp4" type="video/webm" />
          </video>
          <img
            src="/RebirthMainBG.png"
            className="z-0 absolute top-0 left-0 w-full h-screen object-cover hidden"
            alt="Rebirth fallback img"
          />
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="text-center w-[80%] h-[40%] object-contain z-1 flex flex-col gap-12 justify-center items-center">
          <h1 className="lg:!text-5xl md:!text-7xl xl:!text-6xl text-shadow-lg/30 md:text-center">
            Do you have what it takes?
          </h1>
          <DownloadButton
            btnText="Download on Github"
            btnSubText="Windows 64x"
            className="inline-block"
          ></DownloadButton>
        </div>
      </Section>
      <div className="h-0.5 w-full bg-white z-3 "></div>
    </div>
  );
};

export default CallToAction;
