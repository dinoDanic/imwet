export const thunderBolt1 = {
  hidden: {
    pathLength: 0,
    opacity: 1,
    x: 500,
    width: 10,
    height: 10,
  },
  show: {
    pathLength: [0, 1, 1, 1, 1, 1],
    opacity: [1, 1, 1, 1, 0.8, 0.5, 0],
    transition: { duration: 1, repeat: Infinity, repeatDelay: 2 },
  },
};
export const thunderBolt2 = {
  hidden: {
    pathLength: 0,
    opacity: 1,

    width: 10,
    height: 10,
  },
  show: {
    pathLength: [0, 0, 1, 1, 1, 1, 1],
    opacity: [1, 1, 1, 1, 0.8, 0.5, 0],
    transition: { duration: 1.5, repeat: Infinity, repeatDelay: 2 },
  },
};
