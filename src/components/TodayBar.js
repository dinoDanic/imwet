import React, { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
//Images
import sunCloud from "../img/sun-cloud.png";

import cloud1img from "../img/cloud1.png";
import cloud2img from "../img/cloud2.png";
import cloud3img from "../img/cloud3.png";
//Styles & Animations
import "../style/TodayBar.scss";
import { cloudRight, cloudRight2, cloudLeft } from "../animations/motion";

const TodayBar = ({ currentWeather, currentCountry, wind, setWind }) => {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  return (
    <>
      <div className="today-bar">
        <motion.div
          variants={cloudRight}
          animate="show"
          initial="hidden"
          className="cloud1"
        >
          <img src={cloud1img} alt="" />
        </motion.div>
        <motion.div
          className="cloud2"
          variants={cloudLeft}
          animate="show"
          initial="hidden"
        >
          <img src={cloud2img} alt="" width="110px" />
        </motion.div>
        <motion.div
          className="cloud3"
          variants={cloudRight2}
          animate="show"
          initial="hidden"
        >
          <img src={cloud3img} alt="" />
        </motion.div>
        {currentWeather && (
          <>
            <div className="weather-icon">
              <img
                src={currentWeather.current.condition.icon}
                alt="{currentWeather.current.condition.icon}"
              />
              <p>{currentWeather.current.condition.text}</p>
            </div>
            <div className="today-date">
              <h2>Today</h2>
              <p>{date}</p>
            </div>

            <div className="current-temperature">
              <h1>
                {Math.round(currentWeather.current.temp_c)}
                <span>°c</span>
              </h1>
            </div>
            <div className="country">
              <p>
                {currentWeather.location.name}, <br />
                {currentWeather.location.country}
              </p>
            </div>
            <div className="other-info-wrap">
              <div className="other-info">
                <p>Feels like:</p>
                <p>{currentWeather.current.feelslike_c} °c</p>
              </div>
              <div className="other-info">
                <p>Wind:</p>
                <p>{currentWeather.current.wind_kph} kph</p>
              </div>
              <div className="other-info">
                <p>UV:</p>
                <p>{currentWeather.current.uv}</p>
              </div>
              <div className="other-info">
                <p>Gust:</p>
                <p>{currentWeather.current.gust_kph} kph</p>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default TodayBar;
