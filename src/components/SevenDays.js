import React, { useEffect } from "react";
import "../style/SevenDays.scss";
//images
import dropImage from "../img/drop.png";
import sun from "../img/sun.png";

const SevenDays = ({ currentWeather, currentCountry }) => {
  var dateObj = new Date();
  var weekday = dateObj.toLocaleString("default", { weekday: "long" });
  return (
    <>
      {currentWeather && (
        <div className="seven-wraper">
          <h4>
            {currentWeather.location.name}, {currentWeather.location.country}
          </h4>
          {currentWeather.forecast.forecastday.map((forecast) => {
            return (
              <div className="day" key={forecast.date}>
                <h3>{weekday}</h3>
                <div className="drop">
                  <img src={dropImage} alt="" />
                  <p>{forecast.day.daily_chance_of_rain} %</p>
                </div>
                <div className="weather-icon-days">
                  <img src={forecast.day.condition.icon} alt="" />
                </div>
                <div className="progress-bar">
                  <p>{Math.round(forecast.day.mintemp_c)}°c</p>
                  <div className="bars">
                    <div className="bar1"></div>
                    <div
                      className="bar2"
                      style={{ width: `${forecast.day.avgtemp_c * 3}%` }}
                    ></div>
                  </div>
                  <p>{Math.round(forecast.day.maxtemp_c)}°c</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default SevenDays;
