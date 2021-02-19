import React, { createContext, useEffect, useRef, useState } from "react";
import "../style/Animations.scss";
import { motion, AnimatePresence } from "framer-motion";
import { rainAni1, rainAni2, RainContainer } from "../animations/Rain";
import {
  ThunderContainer,
  rainThunderAni1,
  rainThunderAni2,
  thunderBolt1,
} from "../animations/Thunder";
import {
  leafAni1,
  leafAni2,
  leafAni3,
  leafAni4,
  leafAni5,
  leaf2Ani1,
  leaf2Ani2,
  leaf2Ani3,
  leaf2Ani4,
  leaf2Ani5,
  leafContainer,
} from "../animations/Wind";
import {
  snowAni1,
  snowAni2,
  snowAni3,
  snowAni4,
  snowAni5,
  snowAni6,
  snowAni7,
  snowAni8,
  snowAni9,
  snowAni10,
  snowAni11,
  snowAni12,
  snowAni13,
  snowAni14,
  snowAni15,
  snow2Ani1,
  snow2Ani2,
  snow2Ani3,
  snow2Ani4,
  snow2Ani5,
  snow2Ani6,
  snow2Ani7,
  snow2Ani8,
  snow2Ani9,
  snow2Ani10,
  snow2Ani11,
  snow2Ani12,
  snow2Ani13,
  snow2Ani14,
  snow2Ani15,
} from "../animations/Snow";

const WeatherAnimations = ({
  currentWeather,
  currentCountry,
  wind,
  setWind,
  snow,
  setSnow,
  rain,
  setRain,
  thunder,
}) => {
  useEffect(() => {
    if (currentWeather) {
      if (currentWeather.current.wind_kph > 20) {
        setWind(true);
      }
      if (currentWeather.current.wind_kph < 20) {
        setWind(false);
      }
      if (currentWeather.forecast.forecastday[0].hour[0].will_it_snow > 0) {
        setSnow(true);
      }
      if (currentWeather.forecast.forecastday[0].hour[0].will_it_snow <= 0) {
        setSnow(false);
      }
      if (currentWeather.forecast.forecastday[0].hour[0].will_it_rain > 0) {
        setRain(true);
      }
      if (currentWeather.forecast.forecastday[0].hour[0].will_it_rain <= 0) {
        setRain(false);
      }
    }
  }, [currentWeather]);

  return (
    <>
      <AnimatePresence>
        {wind && (
          <>
            <motion.div
              className="leaf-animation contaier-animation"
              variants={leafContainer}
              animate="show"
              initial="hidden"
            >
              <motion.svg width="150%" height="80vh" className="leaf-svg-cont">
                <motion.path
                  variants={leafAni1}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  fill="green"
                  class="leaf"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leafAni2}
                  animate="show"
                  initial="hidden"
                  class="leaf"
                  exit="exit"
                  class="leaf"
                  fill="green"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leafAni3}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  class="leaf"
                  fill="darkgreen"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leafAni4}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  class="leaf"
                  fill="#34c916"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leafAni5}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  class="leaf"
                  fill="green"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
              </motion.svg>
              <motion.svg width="91%" height="80vh">
                <motion.path
                  variants={leaf2Ani1}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  fill="green"
                  class="leaf"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leaf2Ani2}
                  animate="show"
                  initial="hidden"
                  class="leaf"
                  exit="exit"
                  class="leaf"
                  fill="green"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leaf2Ani3}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  class="leaf"
                  fill="darkgreen"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leaf2Ani4}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  class="leaf"
                  fill="#34c916"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
                <motion.path
                  variants={leaf2Ani5}
                  animate="show"
                  initial="hidden"
                  exit="exit"
                  class="leaf"
                  fill="green"
                  d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
                />
              </motion.svg>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {snow && (
          <motion.div className="snow-animation">
            <motion.svg
              width="100%"
              height="120%"
              className="svg-snow-container"
            >
              <motion.circle
                r="5"
                fill="white"
                variants={snow2Ani1}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snow2Ani2}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="6"
                fill="white"
                variants={snow2Ani3}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="7"
                fill="white"
                variants={snow2Ani4}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snow2Ani5}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="5"
                fill="white"
                variants={snow2Ani6}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snow2Ani7}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="6"
                fill="white"
                variants={snow2Ani8}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="7"
                fill="white"
                variants={snow2Ani9}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snow2Ani10}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snow2Ani11}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="5"
                fill="white"
                variants={snow2Ani12}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snow2Ani13}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="6"
                fill="white"
                variants={snow2Ani14}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="7"
                fill="white"
                variants={snow2Ani15}
                animate="show"
                initial="hidden"
                exit="exit"
              />
            </motion.svg>
            <motion.svg width="100%" height="100%">
              <motion.circle
                r="5"
                fill="white"
                variants={snowAni1}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snowAni2}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="6"
                fill="white"
                variants={snowAni3}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="7"
                fill="white"
                variants={snowAni4}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snowAni5}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="5"
                fill="white"
                variants={snowAni6}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snowAni7}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="6"
                fill="white"
                variants={snowAni8}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="7"
                fill="white"
                variants={snowAni9}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snowAni10}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snowAni11}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="5"
                fill="white"
                variants={snowAni12}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="4"
                fill="white"
                variants={snowAni13}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="6"
                fill="white"
                variants={snowAni14}
                animate="show"
                initial="hidden"
                exit="exit"
              />
              <motion.circle
                r="7"
                fill="white"
                variants={snowAni15}
                animate="show"
                initial="hidden"
                exit="exit"
              />
            </motion.svg>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {rain && (
          <motion.div
            className="rain-animation"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={RainContainer}
          >
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>

            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
            <motion.div
              className="rain-line line"
              variants={rainAni1}
            ></motion.div>
            <motion.div
              className="rain-line2 line"
              variants={rainAni2}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {thunder && (
          <motion.div
            className="thunder-animation"
            initial="hidden"
            animate="show"
            exit="exit"
            variants={ThunderContainer}
          >
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
            <motion.div
              className="thunder-line"
              variants={rainThunderAni1}
            ></motion.div>
            <motion.div
              className="thunder-line2"
              variants={rainThunderAni2}
            ></motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default WeatherAnimations;
