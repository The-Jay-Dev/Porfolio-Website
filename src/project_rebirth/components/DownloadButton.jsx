import React from "react";

const DownloadButton = ({ btnText, btnSubText }) => {
  return (
    <div>
      <a
        href="https://github.com/Emissary-Dev/Rebirth"
        className="lg:!text-[1rem] xl:!text-[1.3rem] py-7 px-6 inline-block relative rebirth-cta-btn hover:bg-white hover:text-black bg-black/20 transition text-white border-white border-primary border-2 z-3 "
      >
        {btnText}
        <p className="text-center font-normal italic text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl">
          {btnSubText}
        </p>
      </a>
    </div>
  );
};

export default DownloadButton;
