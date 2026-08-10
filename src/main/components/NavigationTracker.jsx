import React, { useState } from "react";
import { homeNavigation } from "../../constants/PrimaryNavigation";

const NavigationTracker = ({ cursor }) => {
  return (
    <div
      className={`fixed z-90 top-0 right-0 mr-24 w-fit h-screen flex items-center justify-center`}
    >
      <div className={` flex items-center justify-center w-full  h-[70%]`}>
        <div className={`w-0.5 h-full bg-white`}></div>
        <div
          className={` w-32 h-full flex flex-col justify-center items-center `}
        >
          {homeNavigation.map((item, id) => {
            return (
              <div className="ml-1 flex items-center justify-center w-full h-full ">
                <p className={`${cursor === id ? "scale-[120%]" : ""}`} id={id}>
                  {item.title}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationTracker;
