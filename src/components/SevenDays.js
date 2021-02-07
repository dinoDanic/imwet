import React, { useEffect } from "react";
import "../style/SevenDays.scss";
//images
import dropImage from "../img/drop.png";
import sun from "../img/sun.png";

const SevenDays = ({ currentWeather, currentCountry }) => {
  useEffect(() => {});
  return (
    <>
      {currentWeather && (
        <div className="seven-wraper">
          {currentWeather.forecast.forecastday.map((forecast) => {
            return (
              <div className="day" key={forecast.date}>
                <h3>{forecast.date}</h3>
                <div className="drop">
                  <img src={dropImage} alt="" />
                  <p>{forecast.day.daily_chance_of_rain} %</p>
                </div>
                <div className="weather-icon-days">
                  <img src={forecast.day.condition.icon} alt="" />
                </div>
                <div className="progress-bar">
                  <div className="bar1">
                    <p>{Math.round(forecast.day.maxtemp_c)} °c</p>
                  </div>
                  <div className="bar2">
                    <p>{Math.round(forecast.day.mintemp_c)} °c</p>
                  </div>
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
