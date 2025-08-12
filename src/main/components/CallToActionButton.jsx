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
        className="text-sm main-cta-btn main-primary-color ease-out  hover:scale-[105%] hover:shadow-[0_0_20px_#15eadc] mt-6 py-4 px-6 inline-block relative  hover:bg-[#15eadc] hover:!text-white transition border-primary border-2 z-3 "
      >
        {btnText}
      </a>
    </button>
  );
};

export default CallToActionButton;
