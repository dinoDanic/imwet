import React from "react";
import { motion } from "framer-motion";
import "../style/Days3.scss";
const Days3 = ({ currentWeather }) => {
  const days3AniCont = {
    show: { transition: { staggerChildren: 0.07, delayChildren: 0.7 } },
    hidden: {},
  };
  const days3Ani = {
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
      {currentWeather && (
        <motion.div
          className="days3-wraper"
          initial="hidden"
          animate="show"
          variants={days3AniCont}
        >
          <h4>
            {currentWeather.location.name}, {currentWeather.location.country}
          </h4>
          {currentWeather.forecast.forecastday.map((forecast) => {
            return (
              <motion.div
                className="days-day"
                key={forecast.date}
                variants={days3Ani}
              >
                <div className="day-of">
                  <h3>
                    {forecast.date.slice(8)}.{forecast.date.slice(5, -3)}
                  </h3>
                </div>
                <div className="icon-rain">
                  <img
                    width="25"
                    src={forecast.day.condition.icon}
                    alt="weather"
                  />
                  <p>{forecast.day.daily_chance_of_rain} %</p>
                </div>
                <p>
                  <span className="light">
                    Min: {Math.round(forecast.day.mintemp_c)}°
                  </span>
                  Max: {Math.round(forecast.day.maxtemp_c)}°
                </p>
                <div className="wind-day">
                  <p>
                    <span className="light">Wind:</span>
                    {Math.round(forecast.day.maxwind_kph)} km/h
                  </p>
                </div>
              </motion.div>
            );
          })}
          {currentWeather.forecast.forecastday.map((forecast) => {
            return (
              <motion.div
                className="days-day"
                key={forecast.date}
                variants={days3Ani}
              >
                <div className="day-of">
                  <h3>
                    {forecast.date.slice(8)}.{forecast.date.slice(5, -3)}
                  </h3>
                </div>
                <div className="icon-rain">
                  <img
                    width="25"
                    src={forecast.day.condition.icon}
                    alt="weather"
                  />
                  <p>{forecast.day.daily_chance_of_rain} %</p>
                </div>
                <p>
                  <span className="light">
                    Min: {Math.round(forecast.day.mintemp_c)}°
                  </span>
                  Max: {Math.round(forecast.day.maxtemp_c)}°
                </p>
                <div className="wind-day">
                  <p>
                    <span className="light">Wind:</span>
                    {Math.round(forecast.day.maxwind_kph)} km/h
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      )}

      {/* {currentWeather && (
        <div className="days3-wraper">
          <h2>Split, Croatia</h2>
          {currentWeather.forecast.forecastday.map((forecast) => {
            return (
              <div className="days-day" key={forecast.date}>
                <div className="day-of">
                  <h3>Today</h3>
                </div>
                <div className="icon-rain">
                  <img
                    width="25"
                    src={forecast.day.condition.icon}
                    alt="weather"
                  />
                  <p>{forecast.day.daily_chance_of_rain} %</p>
                </div>
                <p>
                  <strong>{Math.round(forecast.day.maxtemp_c)} </strong>
                  {Math.round(forecast.day.mintemp_c)}°
                </p>
                <div className="wind-day">
                  <p>
                    <span className="light">Wind:</span>
                    {Math.round(forecast.day.maxwind_kph)} km/h
                  </p>
                </div>
                <div className="humidity-day">
                  <p>
                    {" "}
                    <span className="light">Humidity:</span>{" "}
                    {forecast.day.avghumidity} %
                  </p>
                </div>
                <div className="sundrise-day">
                  <p>
                    {" "}
                    <span className="light">Sunrise:</span>{" "}
                    {forecast.astro.sunrise}
                  </p>
                </div>
                <div className="sunset-day">
                  <p>
                    {" "}
                    <span className="light">Sunset:</span>
                    {forecast.astro.sunset}
                  </p>
                </div>
              </div>
            );
          })}
          <div className="days-current-bar"></div>
        </div>
      )} */}
    </>
  );
};

export default Days3;
