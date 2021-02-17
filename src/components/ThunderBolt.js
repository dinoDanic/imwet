import React, { useEffect, useState, useRef } from "react";
import { motion, useElementScroll } from "framer-motion";
import { thunderBolt2 } from "../animations/ThunderBoltAni";
import { useRouteMatch } from "react-router-dom";

const ThunderBolt = ({ thunder, numberX }) => {
  const thunderBolt1 = {
    hidden: {
      pathLength: 0,
      opacity: 1,
      width: 10,
      height: 10,
    },
    show: {
      pathLength: [0, 0, 1, 1, 1, 1, 1],
      opacity: [1, 1, 1, 1, 0.8, 0.5, 0],
      transition: {
        duration: 1,
      },
    },
  };

  const thunderContainer1 = {
    show: { x: numberX, transition: { duration: 0 } },
  };

  return (
    <>
      {thunder && (
        <>
          <motion.div
            className="thunder-bolt-container1"
            variants={thunderContainer1}
            animate="show"
            initial="hidden"
          >
            <div className="thunder-bolt">
              <svg
                width="100%"
                height="100vh"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M73.3448 -225L49.8966 -194.503L59.8621 -174.375L73.3448 -137.169V-109.112L59.8621 -65.8062V-41.4087V-18.841L49.8966 1.28696L38.1724 34.2236L49.8966 52.5218L73.3448 84.8484L38.1724 148.282L49.8966 175.119L58.1035 184.878V203.786L38.1724 222.084L49.8966 242.212V264.78L38.1724 289.178L73.3448 307.476L49.8966 346.512V372.739V405.676L38.1724 438.612V481.308L59.8621 511.805L16.4828 563.04L3 601.466L105 757L73.3448 842L105 900.5L73.3448 1091.5"
                  stroke="white"
                  strokeWidth="5"
                  variants={thunderBolt1}
                  initial="hidden"
                  animate="show"
                  className="thunder"
                />
              </svg>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};
export default ThunderBolt;
