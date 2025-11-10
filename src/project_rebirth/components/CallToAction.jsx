import React, { useState } from "react";
import Section from "./Section";
import DownloadButton from "./DownloadButton";
import { useEffect } from "react";
import ReactPlayer from "react-player";

const CallToAction = () => {
  const [BGSrc, setBGSrc] = useState();
  return (
    <div className="flex flex-col justify-center items-center h-auto w-screen">
      <Section className=" relative mx-auto bg-black-800 flex flex-col justify-center items-center w-full">
        <div className=" absolute  z-0 h-full w-full">
          <ReactPlayer
            id="bgVideo"
            className="z-0 absolute top-0 left-0 w-full h-screen object-cover "
            src="/RebirthParticles.mp4"
            playsInline={true}
            muted={true}
            loop={true}
            controls={false}
            playing={true}
            style={{
              width: "100%",
              height: "100%",
              "--controls": "none",
            }}
          ></ReactPlayer>
          <div className="absolute inset-0 bg-black/10" />
        </div>
        <div className="text-center w-[80%] h-[40%] object-contain z-1 flex flex-col gap-12 justify-center items-center">
          <h1 className="lg:text-5xl! md:text-7xl! xl:text-6xl! text-shadow-lg/30 md:text-center">
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
