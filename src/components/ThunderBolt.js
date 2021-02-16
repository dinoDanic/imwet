import React from "react";
import { motion } from "framer-motion";
import { thunderBolt1, thunderBolt2 } from "../animations/ThunderBoltAni";

const ThunderBolt = ({ thunder }) => {
  return (
    <>
      {thunder && (
        <div className="thunder-bolt-container">
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
                variants={thunderBolt2}
                initial="hidden"
                animate="show"
                className="thunder"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
};
export default ThunderBolt;
