import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "../style/WeatherControl.scss";
import windIcon from "../img/wind.svg";
import snowFlakeImg from "../img/snowflake.svg";
import rainImg from "../img/raining.svg";
import thunderImg from "../img/thunder.svg";
const Empty = ({
  wind,
  setWind,
  snow,
  setSnow,
  rain,
  setRain,
  thunder,
  setThunder,
}) => {
  let windIconImg = useRef(null);
  let snowFlakeIcon = useRef(null);
  let rainIcon = useRef(null);
  let thunderIcon = useRef(null);
  useEffect(() => {
    if (wind) {
      windIconImg.style.filter = "grayscale(0%)";
    }
    if (!wind) {
      windIconImg.style.filter = "grayscale(100%)";
    }
    if (snow) {
      snowFlakeIcon.style.filter = "grayscale(0%)";
    }
    if (!snow) {
      snowFlakeIcon.style.filter = "grayscale(100%)";
    }
    if (rain) {
      rainIcon.style.filter = "grayscale(0%)";
    }
    if (!rain) {
      rainIcon.style.filter = "grayscale(100%)";
    }
    if (thunder) {
      thunderIcon.style.filter = "grayscale(0%)";
    }
    if (!thunder) {
      thunderIcon.style.filter = "grayscale(100%)";
    }
  }, [wind, snow, rain, thunder]);
  const windHandler = () => {
    if (wind) {
      setWind(false);
    }
    if (!wind) {
      setWind(true);
    }
    if (snow) {
      setSnow(false);
    }
    if (rain) {
      setRain(false);
    }
  };
  const snowHandler = () => {
    if (snow) {
      setSnow(false);
    }
    if (!snow) {
      setSnow(true);
    }
    if (wind) {
      setWind(false);
    }
    if (rain) {
      setRain(false);
    }
  };
  const rainHandler = () => {
    if (rain) {
      setRain(false);
    }
    if (!rain) {
      setRain(true);
    }
    if (wind) {
      setWind(false);
    }
    if (snow) {
      setSnow(false);
    }
  };
  const thunderHandler = () => {};
  return (
    <div className="weather-wraper">
      <div className="weather-box">
        <h3>Weather Controls</h3>
        <div className="controls">
          <div
            className="control-wind control"
            ref={(el) => (windIconImg = el)}
          >
            <motion.img
              onClick={() => windHandler()}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
              width="25px"
              src={windIcon}
              alt=""
            />
          </div>
          <div
            className="control control-snow"
            ref={(el) => (snowFlakeIcon = el)}
          >
            <motion.img
              src={snowFlakeImg}
              alt=""
              width="25px"
              onClick={() => snowHandler()}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <div className="control control-rain" ref={(el) => (rainIcon = el)}>
            <motion.img
              src={rainImg}
              alt=""
              width="25px"
              onClick={() => rainHandler()}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            />
          </div>
          <div
            className="control control-thunder"
            ref={(el) => (thunderIcon = el)}
          >
            <motion.img
              src={thunderImg}
              alt=""
              width="25px"
              onClick={() => thunderHandler()}
              whileTap={{ scale: 0.8 }}
              whileHover={{ scale: 1.1 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empty;