import React from "react";
import Section from "./Section";

const Footer = () => {
  return (
    <footer
      className="relative flex flex-col 
    bg-neutral-800
    text-gray-200 mx-auto 
    items-center
    justify-center"
    >
      <div className="relative mx-auto w-full h-full ">
        <div className="w-full h-auto flex items-center justify-center  bg-neutral-700/40 py-4 px-4">
          <div className="w-[40%]  h-full flex items-center justify-center">
            <a href="/" className="flex items-center justify-center">
              <img
                className="w-[40%] object-fit"
                src="./src/website_assets/RebirthLogo.png"
                alt="Rebirth Logo"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
