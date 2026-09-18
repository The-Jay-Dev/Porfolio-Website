import React from "react";

const InfoPopup = () => {
  return (
    <div className="w-fit h-fit flex justify-center items-center z-5 self-end mr-24 mb-48">
      <div className="flex-col flex gap-2 justify-center items-center ">
        <p className="w-[36ch] font-light font-primary text-[1.2rem]! text-white self-start! ">
          $ ./init --profile lefkos <br /> MOUNT :: experience.log ....... OK
          <br />
          ROLE :: LEAD_FRONTEND_DEVELOPER
          <br /> FOCUS :: LEGACY_PLATFORMS REACT <br />
          STATUS :: ONLINE
        </p>

        <div>
          <img
            className=" relative max-w-none object-cover mt-4"
            width={500}
            height={93}
            src="/PopupIndicator.png"
            alt=""
          />
          {/* <img
            className="absolute w-[16%] top-12 -right-12 mt-4"
            width={512}
            height={512}
            src="/SectionedCircle.png"
            alt=""
          /> */}
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
