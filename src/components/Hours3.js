import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../style/Hours3.scss";

const Hours3 = ({ currentWeather }) => {
  const [rainMode, setRainMode] = useState(true);
  const [windMode, setWindMode] = useState(false);
  let h3wind = useRef(null);
  let h3rain = useRef(null);
  useEffect(() => {
    if (rainMode) {
      h3rain.classList.add("hc-active");
      h3wind.classList.remove("hc-active");
    }
    if (windMode) {
      h3wind.classList.add("hc-active");
      h3rain.classList.remove("hc-active");
    }
  }, [rainMode, windMode]);
  const checkRain = () => {
    if (rainMode) {
    } else {
      setRainMode(true);
      setWindMode(false);
    }
  };
  const checkWind = () => {
    if (windMode) {
    } else {
      setWindMode(true);
      setRainMode(false);
    }
  };
  const hour3AniCon = {
    show: { transition: { delayChildren: 1, staggerChildren: 0.05 } },
  };
  const hour3Child = {
    hidden: {
      opacity: 0,
      scale: 0.95,
    },
    show: {
      opacity: 1,
      scale: 1,
    },
  };
  return (
    <>
      <motion.div
        className="hour-controls"
        variants={{
          show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.3, delay: 1 },
          },
          hidden: { opacity: 0, scale: 0.95 },
        }}
        animate="show"
        initial="hidden"
      >
        <h3
          className="hour-control-rain"
          onClick={() => checkRain()}
          ref={(el) => (h3rain = el)}
        >
          Rain
        </h3>
        <h3
          className="hour-control-wind"
          onClick={() => checkWind()}
          ref={(el) => (h3wind = el)}
        >
          Wind
        </h3>
      </motion.div>

      {currentWeather && (
        <motion.div
          className="hour3-wraper"
          variants={hour3AniCon}
          animate="show"
          initial="hidden"
        >
          {currentWeather.forecast.forecastday[0].hour.map((forecast) => {
            let maxC = currentWeather.forecast.forecastday[0].day.maxtemp_c;
            let currentC = forecast.temp_c;

            return (
              <motion.div
                className="hour"
                key={forecast.time}
                variants={hour3Child}
              >
                <div className="hour-time">
                  <p>{forecast.time.slice(10, -3)}</p>
                </div>
                <div className="hour-line">
                  <div className="hour-line-inner">
                    <div
                      className="weather-scale"
                      style={{
                        top: `${Math.round(maxC - currentC) * 8}%`,
                      }}
                    >
                      <img width="25" src={forecast.condition.icon} alt="" />
                      <p>{Math.round(forecast.temp_c)}</p>
                    </div>
                  </div>
                </div>
                <div className="rain-hour">
                  {rainMode && (
                    <div
                      className="rain-bar"
                      style={{ height: `${forecast.chance_of_rain}%` }}
                    ></div>
                  )}
                  {windMode && (
                    <div
                      className="wind-bar"
                      style={{ height: `${forecast.wind_kph * 3}%` }}
                    ></div>
                  )}
                  <div className="rain-text">
                    {rainMode && <p>{forecast.chance_of_rain}%</p>}
                    {windMode && (
                      <p className="p-wind">{Math.round(forecast.wind_kph)}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="next-day"></div>
          {currentWeather.forecast.forecastday[1].hour.map((forecast) => {
            let maxC = currentWeather.forecast.forecastday[1].day.maxtemp_c;
            let currentC = forecast.temp_c;

            return (
              <motion.div
                className="hour"
                key={forecast.time}
                variants={hour3Child}
              >
                <div className="hour-time1">
                  <p>{forecast.time.slice(10, -3)}</p>
                </div>
                <div className="hour-line">
                  <div className="hour-line-inner">
                    <div
                      className="weather-scale"
                      style={{
                        top: `${Math.round(maxC - currentC) * 8}%`,
                      }}
                    >
                      <img width="25" src={forecast.condition.icon} alt="" />
                      <p>{Math.round(forecast.temp_c)}</p>
                    </div>
                  </div>
                </div>
                <div className="rain-hour">
                  {rainMode && (
                    <div
                      className="rain-bar"
                      style={{ height: `${forecast.chance_of_rain}%` }}
                    ></div>
                  )}
                  {windMode && (
                    <div
                      className="wind-bar"
                      style={{ height: `${forecast.wind_kph * 3}%` }}
                    ></div>
                  )}
                  <div className="rain-text">
                    {rainMode && <p>{forecast.chance_of_rain}%</p>}
                    {windMode && (
                      <p className="p-wind">{Math.round(forecast.wind_kph)}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
          <div className="next-day"></div>
          {currentWeather.forecast.forecastday[2].hour.map((forecast) => {
            let maxC = currentWeather.forecast.forecastday[2].day.maxtemp_c;
            let currentC = forecast.temp_c;

            return (
              <motion.div
                className="hour"
                key={forecast.time}
                variants={hour3Child}
              >
                <div className="hour-time1">
                  <p>{forecast.time.slice(10, -3)}</p>
                </div>
                <div className="hour-line">
                  <div className="hour-line-inner">
                    <div
                      className="weather-scale"
                      style={{
                        top: `${Math.round(maxC - currentC) * 8}%`,
                      }}
                    >
                      <img width="25" src={forecast.condition.icon} alt="" />
                      <p>{Math.round(forecast.temp_c)}</p>
                    </div>
                  </div>
                </div>
                <div className="rain-hour">
                  {rainMode && (
                    <div
                      className="rain-bar"
                      style={{ height: `${forecast.chance_of_rain}%` }}
                    ></div>
                  )}
                  {windMode && (
                    <div
                      className="wind-bar"
                      style={{ height: `${forecast.wind_kph * 3}%` }}
                    ></div>
                  )}
                  <div className="rain-text">
                    {rainMode && <p>{forecast.chance_of_rain}%</p>}
                    {windMode && (
                      <p className="p-wind">{Math.round(forecast.wind_kph)}</p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}
    </>
  );
};

export default Hours3;
