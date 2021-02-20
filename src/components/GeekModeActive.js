import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import "../style/GeekModeActive.scss";

const GeekMode = ({ currentWeather }) => {
  const [isActive, setIsActive] = useState(false);
  const geekVariants = {
    open: { height: "auto", transition: { duration: 0.3 } },
    close: { height: "45px", transition: { duration: 0.3 } },
  };
  let geekM = useRef(null);
  useEffect(() => {
    setTimeout(() => {
      geekM.style.transition = "0.5s ease all";
      geekM.style.opacity = "1";
      geekM.style.transform = "scale(1)";
    }, 600);
    setTimeout(() => {
      geekM.style.transitionProperty = "none";
    }, 1100);
  }, []);

  return (
    <motion.div
      className="geek-mode-cont box-style"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onClick={() => setIsActive(!isActive)}
      variants={geekVariants}
      animate={isActive ? "open" : "close"}
      ref={(el) => (geekM = el)}
    >
      <motion.h3>GeekMode</motion.h3>
      {currentWeather && (
        <div className="geek-info">
          <div className="arrow-more"></div>
          <h3>Current</h3>
          <div className="roW">
            <p>Temp: </p> <p>{currentWeather.current.temp_c}°</p>
          </div>
          <div className="roW">
            <p>Feels like:</p> <p>{currentWeather.current.feelslike_c}°</p>
          </div>
          <div className="roW">
            <p>Humidity:</p> <p>{currentWeather.current.cloud}%</p>
          </div>

          <div className="roW">
            <p>Precip: </p> <p>{currentWeather.current.precip_mm} mm</p>
          </div>
          <div className="roW">
            <p>Pressure: </p> <p>{currentWeather.current.pressure_in} in</p>
          </div>
          <div className="roW">
            <p>visual: </p> <p>{currentWeather.current.vis_km} km</p>
          </div>
          <div className="roW">
            <p>Wind direction: </p> <p>{currentWeather.current.wind_dir}</p>
          </div>
          <div className="roW">
            <p>Wind speed: </p> <p>{currentWeather.current.wind_kph} kph</p>
          </div>
          <h3>Astro</h3>
          <div className="roW">
            <p>Sunrise: </p>
            <p>{currentWeather.forecast.forecastday[0].astro.sunrise}</p>
          </div>
          <div className="roW">
            <p>Sunset: </p>
            <p>{currentWeather.forecast.forecastday[0].astro.sunset}</p>
          </div>
          <div className="roW">
            <p>Moonrise: </p>
            <p>{currentWeather.forecast.forecastday[0].astro.moonrise}</p>
          </div>
          <div className="roW">
            <p>Moonset: </p>
            <p>{currentWeather.forecast.forecastday[0].astro.moonset}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default GeekMode;
