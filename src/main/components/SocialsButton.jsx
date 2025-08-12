import React from "react";

const SocialsButton = ({ btnXMLNS, btnHref, btnD }) => {
  return (
    <div className="main-socials-icon-color">
      <a
        href={btnHref}
        className={
          "py-2 px-2 hover:shadow-[0_0_20px_#15eadc] ease-in-out  hover:scale-[110%] inline-block relative main-socials-btn main-primary-color hover:bg-white hover:text-black transition  border-primary border-2 z-3 "
        }
      >
        <svg
          className="object-fit fill-current main-primary-color"
          viewBox="0 0 24 24"
          xmlns={btnXMLNS}
          width="24"
          height="24"
        >
          <path d={btnD} />
        </svg>
      </a>
    </div>
  );
};

export default SocialsButton;
