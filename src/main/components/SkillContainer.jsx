import { useState, React } from "react";

const SkillContainer = ({ iconClass, sourceLink }) => {
  const [onClick, setOnClick] = useState(false);

  return (
    <button
      onClick={() => (window.location.href = sourceLink)}
      className="flex justify-center items-center w-full h-full"
    >
      <i
        className={`${iconClass} hover:cursor-pointer xl:text-6xl text-6xl text-black hover:scale-[110%] transition`}
      />
    </button>
  );
};

export default SkillContainer;
