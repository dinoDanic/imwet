import React, { useEffect } from "react";
import "../style/ThreeDays.scss";
//images
import dropImage from "../img/drop.png";
import sun from "../img/sun.png";
import Hour from "./Hour";

const ThreeDays = ({ currentWeather, currentCountry }) => {
  var dateObj = new Date();
  var weekday = dateObj.toLocaleString("default", { weekday: "long" });
  console.log(currentWeather);
  return (
    <>
      {currentWeather && (
        <div className="seven-wraper box-style">
          <h2>
            {currentWeather.location.name}, {currentWeather.location.country}
          </h2>
          <div className="three-days-cont">
            {currentWeather.forecast.forecastday.map((forecast) => {
              return (
                <div className="three-day">
                  <h4 className="get-me-top">Tomorrow</h4>
                  <div className="weather-icon-top">
                    <img
                      width="50px"
                      src={forecast.day.condition.icon}
                      alt=""
                    />
                  </div>
                  <div className="info-top">
                    <h3>{forecast.day.condition.text}</h3>
                    <p>
                      Feels: <strong>15</strong> c
                    </p>
                    <p>
                      Min: <strong>{forecast.day.mintemp_c}</strong> c
                    </p>
                    <p>
                      Max: <strong>{forecast.day.maxtemp_c}</strong> c
                    </p>
                  </div>
                  <div className="graph-thing">
                    <p>
                      Temp: <strong>{forecast.day.avgtemp_c}</strong> c
                    </p>
                    <div className="bar">
                      <div
                        className="top-bar"
                        style={{ width: `${forecast.day.avgtemp_c * 3}%` }}
                      ></div>
                    </div>
                    <p>
                      Wind: <strong>{forecast.day.maxwind_kph}</strong> km/h
                    </p>
                    <div className="bar">
                      <div
                        className="top-bar"
                        style={{ width: `${forecast.day.maxwind_kph * 4}%` }}
                      ></div>
                    </div>
                    <p>
                      Rain: <strong>{forecast.day.daily_chance_of_rain}</strong>{" "}
                      %
                    </p>
                    <div className="bar">
                      <div
                        className="top-bar"
                        style={{
                          width: `${forecast.day.daily_chance_of_rain}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* {currentWeather.forecast.forecastday.map((forecast) => {
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
                  <p className="p-w-left">
                    {Math.round(forecast.day.mintemp_c)}°c
                  </p>
                  <div className="bars">
                    <div className="bar1"></div>
                    <div
                      className="bar2"
                      style={{ width: `${forecast.day.avgtemp_c * 3}%` }}
                    ></div>
                  </div>
                  <p className="p-w-right">
                    {Math.round(forecast.day.maxtemp_c)}°c
                  </p>
                </div>
              </div>
            );
          })} */}

          <Hour
            currentWeather={currentWeather}
            currentCountry={currentCountry}
          />
        </div>
      )}
    </>
  );
};

export default ThreeDays;
