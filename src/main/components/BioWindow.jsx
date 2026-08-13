import React from "react";

const BioWindow = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[80%] h-[50%]">
      <div className=" flex-col m-4 w-[80%] h-full">
        <div className="flex w-full h-[10%] border-4 border-white justify-center">
          <div className="h-full w-[10%] bg-white"></div>
          <div className="h-full w-[70%] flex justify-center items-center">
            <p className="">BIOS</p>
          </div>

          <div className="h-full w-[20%] bg-white"></div>
        </div>
        <div className="w-full h-full border-b-4 border-r-4 border-l-4 border-white"></div>
      </div>
    </div>
  );
};

export default BioWindow;
