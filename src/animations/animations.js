export const slideRight = {
  hidden: {
    opacity: 0.2,
    x: "120%",
  },
  show: {
    opacity: 1,
    x: "-100%",
    transition: {
      duration: 100,
      ease: "easeOut",
    },
  },
};
export const slideRight2 = {
  hidden: {
    opacity: 0.5,
    x: "120%",
  },
  show: {
    opacity: 1,
    x: "-100%",
    transition: {
      duration: 150,
      ease: "easeOut",
    },
  },
};
export const slideLeft = {
  hidden: {
    opacity: 0.4,
    x: "-100%",
    delay: 10,
  },
  show: {
    opacity: 1,
    x: "120%",
    transition: {
      duration: 100,
      ease: "easeOut",
    },
  },
};
