import React from "react";
import Section from "./Section";
import CallToActionButton from "./CallToActionButton";
import SocialsGroup from "./SocialsGroup";
const CallToAction = () => {
  return (
    <div
      id="contact"
      className=" relative mx-auto h-96 bg-black-800 flex flex-col justify-center items-center bg-[#1b2431] "
    >
      <div className="w-[80%] h-[40%] object-contain z-1 flex flex-col justify-center gap-4 items-center">
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
        <div className="w-1/2 flex flex-col justify-center items-center">
          {/* <h2 className=" !font-medium text-white">+1 470-952-5669</h2> */}

          <SocialsGroup topMargin="mt-6" />

          <CallToActionButton initialText="Email Me"></CallToActionButton>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
