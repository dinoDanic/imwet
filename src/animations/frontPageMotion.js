export const sectionContainerAni = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
};
export const sectionChildrenAni = {
  hidden: { scale: 0.95, opacity: 0 },
  show: {
    scale: [0.9, 1.015, 1],
    opacity: 1,
    transition: { duration: 0.5, type: "spring" },
  },
};
