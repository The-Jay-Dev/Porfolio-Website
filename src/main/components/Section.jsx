import React from "react";

const Section = ({ className, id, customPaddings, children }) => {
  return (
    <div
      id={id}
      className={`relative min-h-screen 
    ${className || ""}`}
    >
      {children}
    </div>
  );
};

export default Section;
