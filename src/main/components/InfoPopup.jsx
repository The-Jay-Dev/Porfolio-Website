import React from "react";
import { motion } from "framer-motion";

const InfoPopup = () => {
  return (
    <div className="hidden p-16 relative -translate-y-32  scale-70  xl:mr-64 lg:flex justify-center items-center z-5  mb-12 gap-6">
      <div className="flex-col flex gap-2 justify-center items-center ">
        <p className="  w-[36ch] font-light font-primary text-[1.2rem]! text-white  ">
          cout &lt;&lt; "Profile activated."; <br />{" "}
          std::chrono::system_clock::to_time_t(now); cout &lt;&lt; "Switching to
          JS...";
          <br />
          console.log("ROLE: FULL_STACK
          <br /> FOCUS: LEGACY_PLATFORMS REACT <br />
          STATUS: ONLINE);
        </p>

        <div>
          <img
            className="object-cover mt-4"
            width={500}
            height={93}
            src="/PopupIndicator.png"
            alt=""
          />
          <motion.div
            animate={{ rotateZ: 360 }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "linear",
            }}
            className="absolute min-w-[15rem] hidden xl:flex top-32 left-105 scale-[30%]  "
          >
            <img src="/SectionedCircle.png" alt="" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default InfoPopup;
