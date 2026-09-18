import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col 
    bg-[#1b2431]
    text-gray-200 mx-auto 
    items-center
    justify-center"
    >
      <div className="relative mx-auto w-full h-full ">
        <div className="w-full h-16 bg-transparent py-4 px-4">
          <div className=" w-full h-full  flex justify-center">
            <a href="#">
              <img
                className="w-[100%] h-[100%] object-contain"
                src="/JayDevLogo.png"
                alt="Jay Dev Logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
