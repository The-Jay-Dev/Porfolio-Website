import React from "react";
import Section from "./Section";
import CallToActionButton from "./CallToActionButton";
import SocialsGroup from "./SocialsGroup";
const CallToAction = () => {
  return (
    <div
      id="contact"
      className=" relative mx-auto h-96 bg-black-800 flex flex-col justify-center items-center rounded-t-xl bg-home-bg-secondary "
    >
      <div className="w-[80%] h-[40%] object-contain z-1 flex flex-col justify-center gap-6 items-center">
        <div className="w-[30ch] sm:w-[50ch] !md:w-1/2 flex  justify-center  items-center">
          <div className="flex flex-col justify-center items-center gap-6">
            <h1 className="text-center md:text-left !text-5xl text-white">
              Let's connect!
            </h1>
            <p className="text-center">
              Feel free to reach out by email or social media and I’ll reply as
              soon as I can.
            </p>
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-6 justify-center items-center">
          <SocialsGroup />

          <CallToActionButton initialText="Email Me"></CallToActionButton>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
