import React from "react";

const BioWindow = ({ contents, title, flexData }) => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] h-[50%]">
      <div className=" flex-col m-4 w-[80%] h-full">
        <div className="flex w-full h-[10%] border-3 border-white justify-center">
          <div className="h-full w-[10%] bg-white"></div>
          <div className="h-full w-[70%] flex justify-center items-center">
            <p className="font-primary text-[2rem]!">{title}</p>
          </div>

          <div className="h-full w-[20%] bg-white"></div>
        </div>
        <div
          className={`w-full border-b-3 border-r-3 border-l-3 ${flexData} border-white `}
        >
          {contents}
        </div>
      </div>
    </div>
  );
};

export default BioWindow;
