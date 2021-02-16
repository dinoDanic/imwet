import React from "react";

export const ThunderContainer = {
  exit: {},
  show: { x: 0, transition: { staggerChildren: 0.1, staggerDirection: -1 } },
};
export const rainThunderAni1 = {
  hidden: { y: -100 },
  show: {
    y: 900,

    transition: {
      duration: 0.6,
      ease: "easeIn",
      repeat: Infinity,
    },
  },
  exit: { opacity: 0, transition: { duration: 3 } },
};
export const rainThunderAni2 = {
  hidden: { y: -100 },
  show: {
    y: 900,

    transition: {
      duration: 0.8,
      ease: "easeIn",
      repeat: Infinity,
    },
    exit: { opacity: 0, transition: { duration: 3 } },
  },
};
