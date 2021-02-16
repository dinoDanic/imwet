export const snowContainer = {
  show: { transition: { staggerChildren: 0.1 } },
};
export const snowFlake1 = {
  hidden: {},
  show: {
    y: 1000,
    x: [0, 100, 0, 250, 0],
    scale: [0, 1, 1, 1],
    transition: { duration: 10, repeat: Infinity, delay: 0 },
  },
};
export const snowFlake2 = {
  hidden: {},
  show: {
    y: 1000,
    x: [250, 390, 200, 500, 250],
    scale: [0, 1, 1, 1],
    transition: { duration: 8, repeat: Infinity, delay: 0 },
  },
};
export const snowFlake3 = {
  hidden: {},
  show: {
    x: [500, 600, 520, 850, 400],
    y: 1000,
    scale: [0, 1, 1, 1],
    transition: { duration: 9, repeat: Infinity, delay: 0 },
  },
};
