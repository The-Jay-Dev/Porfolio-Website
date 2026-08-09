import React from "react";
import { homeNavigation } from "../../constants/PrimaryNavigation";

const NavigationTracker = () => {
  const heightPercentage = 50;
  return (
    <div
      className={`fixed z-90 top-0 right-0 mr-24 w-fit  h-screen flex items-center justify-center`}
    >
      <div
        className={` flex items-center justify-center w-full h-[${heightPercentage}%]`}
      >
        <div className={`w-0.5 h-full bg-white`}></div>
        <div
          className={` w-32 h-full flex flex-col justify-center items-center `}
        >
          {homeNavigation.map((item) => {
            return (
              <div className="ml-1 flex items-center justify-center w-full h-full ">
                <p>{item.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NavigationTracker;
