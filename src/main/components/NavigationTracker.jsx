import React, { useState } from "react";
import { homeNavigation } from "../../constants/PrimaryNavigation";

const NavigationTracker = ({ cursor }) => {
  return (
    <div
      className={`hidden  scale-[80%] lg:flex fixed z-2 top-0 right-0 w-fit h-screen items-center justify-center`}
    >
      <div
        className={` flex items-center justify-center w-full hover:opacity-30 z-2 h-[60%]`}
      >
        <div className={`w-0.5 h-full bg-white z-1`}></div>
        <div
          className={` w-32 h-full flex flex-col justify-center items-center z-1 `}
        >
          {homeNavigation.map((item, id) => {
            return (
              <div
                key={id}
                className="ml-1 flex items-center justify-center w-full h-full "
              >
                <p
                  className={`transition-transform ease-in-out duration-200 lg:text-[0.2rem] ${cursor === id ? "scale-[130%] text-home-accent-primary" : ""}`}
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
