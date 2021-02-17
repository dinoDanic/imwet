import React from "react";

export const ThunderContainer = {
  exit: {},
  hidden: { x: 0 },
  show: {
    x: 0,
    transition: { staggerChildren: 0.1, staggerDirection: -1, duration: 5 },
  },
};
export const rainThunderAni1 = {
  hidden: { y: -100, rotate: -10 },
  show: {
    y: 900,
    x: 100,
    rotate: -10,
    transition: {
      duration: 0.5,
      ease: "easeIn",
      repeat: Infinity,
    },
  },
  exit: { opacity: 0, transition: { duration: 3 } },
};
export const rainThunderAni2 = {
  hidden: { y: -100, rotate: -10 },
  show: {
    y: 900,
    x: 300,
    rotate: -10,
    transition: {
      duration: 0.6,
      ease: "easeIn",
      repeat: Infinity,
    },
    exit: { opacity: 0, transition: { duration: 3 } },
  },
};
