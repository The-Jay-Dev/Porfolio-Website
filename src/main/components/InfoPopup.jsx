import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useScramble } from "use-scramble";

const InfoPopup = ({ beginIntroAnimation, largeScreen }) => {
  const [enablelockScroll, setEnableLockScroll] = useState(true);
  useEffect(() => {
    if (enablelockScroll && largeScreen) {
      console.log("STARTED");
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
      document.body.style.overflow = "hidden";
      setEnableLockScroll(false);
    }
  }, [enablelockScroll, largeScreen]);
  const { ref: bioScrambleRef, replay: replayBioScamble } = useScramble({
    onAnimationEnd: beginIntroAnimation,
    overflow: false,
    text: 'cout << "Profile activated.";\nstd::chrono::system_clock::to_time_t(now); cout << "Switching to JS...";\nconsole.log("ROLE: FULL_STACK\n FOCUS: LEGACY_PLATFORMS REACT\nSTATUS: ONLINE");',
    speed: 1,
  });
  return (
    <div className="hidden p-16 relative -translate-y-32  scale-70  xl:mr-64 lg:flex justify-center items-center z-5  mb-12 gap-6">
      <div className="flex-col flex gap-2 justify-center items-center ">
        <p
          ref={bioScrambleRef}
          className="  w-[36ch] font-light font-primary text-[1.2rem]! text-white  "
        >
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
