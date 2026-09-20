import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useEffect, useState, useRef } from "react";
import { fadeIn } from "../../AnimationStates";
import { motion } from "framer-motion";
const Carousel = ({ slides }) => {
  const [cursor, setCursor] = useState(0);
  const [cursorPrev, setCursorPrev] = useState(0);

  function nextSlide() {
    if (cursor < slides.length - 1) {
      setCursorPrev(cursor);
      setCursor(cursor + 1);
    } else {
      setCursorPrev(-1);
      setCursor(0);
    }
  }

  function prevSlide() {
    if (cursor > 0) {
      setCursorPrev(cursor);
      setCursor(cursor - 1);
    } else {
      setCursorPrev(cursor);
      setCursor(0);
    }
  }
  return (
    <div className="relative overflow-hidden flex justify-start items-center w-full h-full  hover:drop-shadow-sm hover:shadow-white transition hover:scale-[100.8%]">
      <BsArrowLeftCircleFill
        className="arrow arrow-left cursor-pointer z-20"
        onClick={prevSlide}
      />
      {slides.map((slide, id) => {
        return (
          <motion.div
            key={id}
            variants={fadeIn(0, cursorPrev < cursor ? "right" : "left", 0.5)}
            initial="hidden"
            animate={cursor === id ? "show" : "hidden"}
            viewport={{ once: true, amount: 0.8 }}
            className={`${cursor === id ? "" : "hidden"} z-10 w-full h-full`}
            onClick={nextSlide}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              className={`w-full h-full object-cover rounded-2xl `}
            />
          </motion.div>
        );
      })}
      <BsArrowRightCircleFill
        className="arrow arrow-right cursor-pointer z-20"
        onClick={nextSlide}
      />

      <span className="indicator-container">
        {slides.map((_, index) => {
          return (
            <button
              key={index}
              onClick={null}
              className={`indicator z-20 transition ${cursor === index ? "scale-[120%] bg-home-accent-primary!" : ""}`}
            ></button>
          );
        })}
      </span>
    </div>
  );
};

export default Carousel;
