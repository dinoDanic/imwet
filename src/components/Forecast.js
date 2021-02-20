import React from "react";
import { motion } from "framer-motion";
import "../style/Forecast.scss";
import Days3 from "../components/Days3";
import Hours3 from "../components/Hours3";
const Forecast = ({ currentWeather }) => {
  return (
    <motion.div
      className="forecast-wraper box-style"
      variants={{
        show: {
          opacity: 1,
          scale: 1,
          transition: { duration: 0.5, delay: 0.3 },
        },
        hidden: { opacity: 0, scale: 0.95 },
      }}
      animate="show"
      initial="hidden"
    >
      <Days3 currentWeather={currentWeather} />
      <Hours3 currentWeather={currentWeather} />
    </motion.div>
  );
};

export default Forecast;
