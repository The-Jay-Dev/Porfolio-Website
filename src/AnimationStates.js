import { motion } from "framer-motion";

export const fadeIn = (delay, direction = "", duration = 1.2) => {
  return {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
    },
    show: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: duration,
        delay,
        ease: [0.24, 0.25, 0.25, 0.75],
      },
    },
  };
};
