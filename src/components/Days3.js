import React from "react";
import { motion } from "framer-motion";
import "../style/Days3.scss";
//Images
import sunImg from "../img/weather-icons/sun.png";
import cloudMoonImg from "../img/weather-icons/cloud-moon.png";
import cloudsImg from "../img/weather-icons/clouds.png";

import fogImg from "../img/weather-icons/fog.png";
import havyRainImg from "../img/weather-icons/heavy-rain.png";
import moonStarImg from "../img/weather-icons/moon-star.png";
import rain1Img from "../img/weather-icons/rain.png";
import rain2Img from "../img/weather-icons/rain2.png";
import rain3Img from "../img/weather-icons/rain3.png";
import rain4Img from "../img/weather-icons/rain4.png";
import sunCloudImg from "../img/weather-icons/sun-cloud.png";
import thunderRainImg from "../img/weather-icons/thunder-rain.png";
import thunderImg from "../img/weather-icons/thunder.png";
import umbrellaImg from "../img/weather-icons/umbrella.png";
import windyImg from "../img/weather-icons/windy.png";
import snowStar1Img from "../img/weather-icons/snow-star1.png";
import snowStar2Img from "../img/weather-icons/snow-star2.png";
import snowStar3Img from "../img/weather-icons/snow-star3.png";
import sunCloudRainImg from "../img/weather-icons/sun-cloud-rain.png";
import dropImg from "../img/drop.png";
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
  const getImage = (code) => {
    switch (code) {
      case "//cdn.weatherapi.com/weather/64x64/night/113.png":
        return moonStarImg;
      case "//cdn.weatherapi.com/weather/64x64/day/113.png":
        return sunImg;
      case "//cdn.weatherapi.com/weather/64x64/night/116.png":
        return cloudMoonImg;
      case "//cdn.weatherapi.com/weather/64x64/day/116.png":
        return sunCloudImg;
      case "//cdn.weatherapi.com/weather/64x64/night/122.png":
        return cloudsImg;
      case "//cdn.weatherapi.com/weather/64x64/day/122.png":
        return sunCloudImg;
      case "//cdn.weatherapi.com/weather/64x64/day/266.png":
        return rain3Img;
      case "//cdn.weatherapi.com/weather/64x64/day/266.png":
        return sunCloudImg;
      case "//cdn.weatherapi.com/weather/64x64/day/176.png":
        return sunCloudRainImg;
      case "//cdn.weatherapi.com/weather/64x64/day/119.png":
        return cloudsImg;
      case "//cdn.weatherapi.com/weather/64x64/night/119.png":
        return cloudMoonImg;
      case "//cdn.weatherapi.com/weather/64x64/night/143.png":
        return fogImg;
      case "//cdn.weatherapi.com/weather/64x64/night/260.png":
        return fogImg;
      case "//cdn.weatherapi.com/weather/64x64/day/260.png":
        return fogImg;
      case "//cdn.weatherapi.com/weather/64x64/day/143.png":
        return fogImg;
      case "//cdn.weatherapi.com/weather/64x64/day/326.png":
        return snowStar1Img;
      case "//cdn.weatherapi.com/weather/64x64/night/326.png":
        return snowStar1Img;
      case "//cdn.weatherapi.com/weather/64x64/night/332.png":
        return snowStar2Img;
      case "//cdn.weatherapi.com/weather/64x64/night/338.png":
        return snowStar3Img;
      case "//cdn.weatherapi.com/weather/64x64/day/338.png":
        return snowStar3Img;
      case "//cdn.weatherapi.com/weather/64x64/night/329.png":
        return snowStar2Img;
      case "//cdn.weatherapi.com/weather/64x64/day/329.png":
        return snowStar2Img;
      case "//cdn.weatherapi.com/weather/64x64/day/332.png":
        return snowStar2Img;
      case "//cdn.weatherapi.com/weather/64x64/night/302.png":
        return rain2Img;
      case "//cdn.weatherapi.com/weather/64x64/day/302.png":
        return rain2Img;
      case "//cdn.weatherapi.com/weather/64x64/night/311.png":
        return rain2Img;
      case "//cdn.weatherapi.com/weather/64x64/night/323.png":
        return snowStar1Img;
      default:
        return umbrellaImg;
    }
  };
  return (
    <>
      {currentWeather && (
        <>
          <h4>
            {currentWeather.location.name}, {currentWeather.location.country}
          </h4>
          <motion.div
            className="days3-wraper"
            initial="hidden"
            animate="show"
            variants={days3AniCont}
          >
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
                      src={getImage(forecast.day.condition.icon)}
                      alt=""
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
                      src={getImage(forecast.day.condition.icon)}
                      alt=""
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
        </>
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
