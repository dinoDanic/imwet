import React from "react";
//Images
import sunCloud from "../img/sun-cloud.png";
import { useHistory } from "react-router-dom";
//Styles
import "../style/TodayBar.scss";

const TodayBar = ({ currentWeather, currentCountry }) => {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
  return (
    <div className="today-bar">
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
  );
};

export default TodayBar;
