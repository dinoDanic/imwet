import React from "react";

const rendomX = () => {
  let rendom = Math.floor(Math.random() * 800);
  return rendom;
};
export const RainContainer = {
  hidden: { x: 100 },
  show: { x: 0, transition: { staggerChildren: 0.2, staggerDirection: 1 } },
};
export const rainAni1 = {
  hidden: { y: -100 },
  show: {
    y: 900,
    transition: {
      duration: 0.9,
      ease: "easeIn",
      repeat: Infinity,
    },
  },
  exit: { y: 900 },
};
export const rainAni2 = {
  hidden: { y: -100 },
  show: {
    y: 900,
    transition: {
      duration: 1.3,
      ease: "easeIn",
      repeat: Infinity,
    },
    exit: { y: 900 },
  },
};
