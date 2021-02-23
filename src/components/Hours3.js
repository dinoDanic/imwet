import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../style/Hours3.scss";
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
  let date = new Date();
  let hour2 = date.getHours();
  let hour = 22;
  const getTime = (time) => {
    switch (time) {
      case 0:
        return 0;
      case 1:
        return 1;
      case 2:
        return 1;
      case 3:
        return 1;
      case 4:
        return 0.9;
      case 5:
        return 0.8;
      case 6:
        return 0.8;
      case 7:
        return 0.7;
      case 8:
        return 0.7;
      case 9:
        return 0.6;
      case 10:
        return 0.3;
      case 11:
        return 0.3;
      case 12:
        return 0.4;
      case 13:
        return 0.3;
      case 14:
        return 0.2;
      default:
        return 0;
    }
  };

  let duration = hour * 0.025;

  const hour3AniCon = {
    show: {
      transition: { delayChildren: getTime(hour2), staggerChildren: 0.06 },
    },
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
                        top: `${Math.round(maxC - currentC) * 7}%`,
                      }}
                    >
                      <img
                        width="22"
                        src={getImage(forecast.condition.icon)}
                        alt=""
                      />
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
          {/*   <div className="next-day"></div> */}
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
                        top: `${Math.round(maxC - currentC) * 7}%`,
                      }}
                    >
                      <img
                        width="22"
                        src={getImage(forecast.condition.icon)}
                        alt=""
                      />
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
          {/*           <div className="next-day"></div> */}
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
                        top: `${Math.round(maxC - currentC) * 7}%`,
                      }}
                    >
                      <img
                        width="22"
                        src={getImage(forecast.condition.icon)}
                        alt=""
                      />
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
