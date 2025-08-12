import React, { useState } from "react";

const ProjectContainer = ({
  source,
  tag,
  description,
  altText,
  projectTitle,
  btnUrl,
}) => {
  const [onClick, setOnClick] = useState(false);

  return (
    <button
      onClick={() => (window.location.href = btnUrl)}
      className="relative container row-span-2 bg-[#404040] hover:cursor-pointer hover:scale-[105%] transition hover:shadow-[0_0_20px_#ffffff] h-full w-full rounded-2xl overflow-hidden"
    >
      <div className="w-full h-full flex flex-col items-center justify-center">
        <img className="h-[60%] w-full" src={source} alt={altText} />
        <h2 className="font-medium  mt-4">{projectTitle}</h2>
        <p className="font-medium  main-primary-color">{tag}</p>
        <div className="h-[60%] w-full mt-6 items-center justify-center">
          <p className="text-center font-normal">{description}</p>
        </div>
      </div>
    </button>
  );
};

export default ProjectContainer;
