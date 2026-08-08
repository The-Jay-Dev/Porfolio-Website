import React, { useState } from "react";

const CallToActionButton = ({ initialText }) => {
  const [btnText, setBtnText] = useState(initialText);
  const [textSelect, setTextSelect] = useState("select-none");

  return (
    <button
      className={textSelect}
      onClick={() => {
        setBtnText("jayemissary@gmail.com");
        setTextSelect("select-all");
      }}
    >
      <a
        target="_self"
        href="mailto:jayemissary@gmail.com"
        className="text-sm main-cta-btn border-white border-2 ease-out  hover:scale-[105%] hover:shadow-[0_0_20px_#a22522] py-4 px-6 inline-block relative  hover:bg-white hover:!text-[#a22522] transition z-3 "
      >
        {btnText}
      </a>
    </button>
  );
};

export default CallToActionButton;
