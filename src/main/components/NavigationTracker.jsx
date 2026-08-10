import React, { useState } from "react";
import { homeNavigation } from "../../constants/PrimaryNavigation";

const NavigationTracker = ({ cursor }) => {
  return (
    <div
      className={`hidden lg:flex fixed z-2 top-0 right-0 lg:mr-10 w-fit h-screen items-center justify-center`}
    >
      <div className={` flex items-center justify-center w-full  h-[60%]`}>
        <div className={`w-0.5 h-full bg-white`}></div>
        <div
          className={` w-32 h-full flex flex-col justify-center items-center `}
        >
          {homeNavigation.map((item, id) => {
            return (
              <div className="ml-1 flex items-center justify-center w-full h-full ">
                <p
                  className={`transition-transform ease-in-out duration-200 lg:text-[0.2rem] ${cursor === id ? "scale-[120%]" : ""}`}
                  id={id}
                >
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
