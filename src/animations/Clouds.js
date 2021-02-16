export const cloudRight = {
  hidden: { x: "-100%" },
  show: {
    x: "100%",
    transition: {
      duration: 40,
      ease: "easeInOut",
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};
export const cloudRight2 = {
  hidden: { x: "70%", opacity: 0 },
  show: {
    x: "100%",
    opacity: 1,
    transition: {
      duration: 60,
      ease: "easeInOut",
      repeatType: "reverse",
      repeat: Infinity,
    },
  },
};
export const cloudLeft = {
  hidden: { x: "10%", opacity: 0 },
  show: {
    opacity: 1,
    x: "-100%",

    transition: { duration: 40, ease: "easeInOut", repeat: Infinity },
  },
};
