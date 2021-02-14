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
export const leafContainer = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};

export const ball = {
  hidden: { x: -100 },
  show: {
    x: 1500,
    rotate: 2000,
    y: [0, 0, 0, -30, 0, -30, 0, 0, -30, 0, -30, 0, -30, 0],
    transition: { duration: 5, repeat: Infinity, delay: 60, repeatDelay: 60 },
  },
  exit: {
    x: "100%",

    rotate: 500,
    transition: { duration: 1 },
  },
};
export const leafAni1 = {
  hidden: { x: "-10%" },
  show: {
    x: "100%",
    rotate: 500,
    y: [10, 70, 80, 30, -20, 90, 10, 30],
    transition: { duration: 2, repeat: Infinity, type: "spring" },
  },
  exit: {
    x: "100%",

    rotate: 500,
    transition: { duration: 1 },
  },
};
export const leafAni2 = {
  hidden: { x: "-10%" },
  show: {
    x: "100%",
    y: [100, 230, 380, 410, 500],
    rotate: 500,
    transition: { delay: 0.5, duration: 3, repeat: Infinity, type: "spring" },
  },
  exit: {
    x: "100%",
    rotate: 500,

    transition: { duration: 1 },
  },
};
export const leafAni3 = {
  hidden: { x: "-10%" },
  show: {
    x: "100%",
    y: [300, 530, 380, 230, 400, 620, 510],
    rotate: 800,

    transition: { delay: 1, duration: 4, repeat: Infinity, type: "spring" },
  },
  exit: {
    x: "100%",

    rotate: 500,
    transition: { duration: 1 },
  },
};
export const leafAni4 = {
  hidden: { x: "-10%" },
  show: {
    x: "100%",
    y: [800, 530, 480, 320, 310],

    rotate: 800,
    transition: { delay: 3, duration: 4, repeat: Infinity, type: "spring" },
  },
  exit: {
    x: "100%",
    rotate: 500,
    transition: { duration: 1 },
  },
};
export const leafAni5 = {
  hidden: { x: "-10%" },
  show: {
    x: "100%",
    y: [100, 530, 680, 500, 410],
    rotate: 300,
    transition: { delay: 4, duration: 3, repeat: Infinity, type: "spring" },
  },
  exit: {
    x: "100%",
    rotate: 500,
    transition: { duration: 1 },
  },
};

export const snowAni1 = {
  hidden: { scale: 0, x: 0 },
  show: {
    y: 1000,
    x: [0, 100, 0, 250, 0],
    scale: [0, 1, 1, 1],
    transition: { duration: 10, repeat: Infinity, delay: 1 },
  },
  exit: { y: 1000 },
};
export const snowAni2 = {
  hidden: { scale: 0, x: 250 },
  show: {
    y: 1000,
    x: [250, 390, 200, 500, 250],
    scale: [0, 1, 1, 1],
    transition: { duration: 8, repeat: Infinity, delay: 2 },
  },
  exit: { y: 1000 },
};
export const snowAni3 = {
  hidden: { scale: 0, x: 500 },
  show: {
    y: 1000,
    x: [500, 600, 520, 850, 400],
    scale: [0, 1, 1, 1],
    transition: { duration: 9, repeat: Infinity, delay: 3 },
  },
  exit: { y: 1000 },
};
export const snowAni4 = {
  hidden: { scale: 0, x: 750 },
  show: {
    y: 1000,
    x: [750, 850, 700, 800, 650],
    scale: [0, 1, 1, 1],
    transition: { duration: 9, repeat: Infinity, delay: 2 },
  },
  exit: { y: 1000 },
};
export const snowAni5 = {
  hidden: { scale: 0, x: 1100 },
  show: {
    y: 1000,
    x: [1100, 1200, 900, 1100, 1150],
    scale: [0, 1, 1, 1],
    transition: { duration: 11, repeat: Infinity, delay: 4.3 },
  },
  exit: { y: 1000 },
};
export const snowAni6 = {
  hidden: { scale: 0, x: 0 },
  show: {
    y: 1000,
    x: [50, 170, 40, 250, 379],
    scale: [0, 1, 1, 1],
    transition: { duration: 10, repeat: Infinity, delay: 2.7 },
  },
  exit: { y: 1000 },
};
export const snowAni7 = {
  hidden: { scale: 0, x: 250 },
  show: {
    y: 1000,
    x: [250, 390, 250, 510, 280],
    scale: [0, 1, 1, 1],
    transition: { duration: 8.5, repeat: Infinity, delay: 2.1 },
  },
  exit: { y: 1000 },
};
export const snowAni8 = {
  hidden: { scale: 0, x: 500 },
  show: {
    y: 1000,
    x: [530, 630, 540, 850, 400],
    scale: [0, 1, 1, 1],
    transition: { duration: 9.1, repeat: Infinity, delay: 3.1 },
  },
  exit: { y: 1000 },
};
export const snowAni9 = {
  hidden: { scale: 0, x: 750 },
  show: {
    y: 1000,
    x: [790, 890, 730, 830, 650],
    scale: [0, 1, 1, 1],
    transition: { duration: 10.5, repeat: Infinity, delay: 4.3 },
  },
  exit: { y: 1000 },
};
export const snowAni10 = {
  hidden: { scale: 0, x: 1100 },
  show: {
    y: 1000,
    x: [1000, 1100, 950, 1150, 1150],
    scale: [0, 1, 1, 1],
    transition: { duration: 11, repeat: Infinity, delay: 2.2 },
  },
  exit: { y: 1000 },
};
export const snowAni11 = {
  hidden: { scale: 0, x: 0 },
  show: {
    y: 1000,
    x: [50, 170, 40, 250, 379],
    scale: [0, 1, 1, 1],
    transition: { duration: 10, repeat: Infinity, delay: 1.7 },
  },
  exit: { y: 1000 },
};
export const snowAni12 = {
  hidden: { scale: 0, x: 250 },
  show: {
    y: 1000,
    x: [250, 390, 250, 510, 280],
    scale: [0, 1, 1, 1],
    transition: { duration: 8.5, repeat: Infinity, delay: 1.1 },
  },
  exit: { y: 1000 },
};
export const snowAni13 = {
  hidden: { scale: 0, x: 500 },
  show: {
    y: 1000,
    x: [530, 630, 540, 850, 400],
    scale: [0, 1, 1, 1],
    transition: { duration: 9.1, repeat: Infinity, delay: 1.1 },
  },
  exit: { y: 1000 },
};
export const snowAni14 = {
  hidden: { scale: 0, x: 750 },
  show: {
    y: 1000,
    x: [790, 890, 730, 830, 650],
    scale: [0, 1, 1, 1],
    transition: { duration: 10.5, repeat: Infinity, delay: 0.3 },
  },
  exit: { y: 1000 },
};
export const snowAni15 = {
  hidden: { scale: 0, x: 1100 },
  show: {
    y: 1000,
    x: [1000, 1100, 950, 1150, 1150],
    scale: [0, 1, 1, 1],
    transition: { duration: 11, repeat: Infinity, delay: 2.2 },
  },
  exit: { y: 1000 },
};
