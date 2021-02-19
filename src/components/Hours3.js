import React, { Suspense } from "react";
import "../style/Hours3.scss";
import sun from "../img/sun.png";
const Hours3 = ({ currentWeather }) => {
  return (
    <>
      {currentWeather && (
        <div className="hour3-wraper">
          {currentWeather.forecast.forecastday[0].hour.map((forecast) => {
            let maxC = currentWeather.forecast.forecastday[0].day.maxtemp_c;
            let currentC = forecast.temp_c;
            console.log(forecast);
            return (
              <div className="hour">
                <div className="hour-time">
                  <p>{forecast.time.slice(10, -3)}</p>
                </div>
                <div className="hour-line">
                  <div className="hour-line-inner">
                    <div
                      className="weather-scale"
                      style={{
                        top: `${Math.round(maxC - currentC) * 10}%`,
                      }}
                    >
                      <img width="25" src={forecast.condition.icon} alt="" />
                      <p>{Math.round(forecast.temp_c)}</p>
                    </div>
                  </div>
                </div>
                <div className="rain-hour">
                  <div
                    className="rain-bar"
                    style={{ height: `${forecast.chance_of_rain}%` }}
                  ></div>
                  <div className="rain-text">
                    <p>{forecast.chance_of_rain}%</p>
                  </div>
                </div>
              </div>
            );
          })}
          {currentWeather.forecast.forecastday[1].hour.map((forecast) => {
            let maxC = currentWeather.forecast.forecastday[1].day.maxtemp_c;
            let currentC = forecast.temp_c;
            console.log(forecast);
            return (
              <div className="hour">
                <div className="hour-time1">
                  <p>{forecast.time.slice(10, -3)}</p>
                </div>
                <div className="hour-line">
                  <div className="hour-line-inner">
                    <div
                      className="weather-scale"
                      style={{
                        top: `${Math.round(maxC - currentC) * 10}%`,
                      }}
                    >
                      <img width="25" src={forecast.condition.icon} alt="" />
                      <p>{Math.round(forecast.temp_c)}</p>
                    </div>
                  </div>
                </div>
                <div className="rain-hour">
                  <div
                    className="rain-bar"
                    style={{ height: `${forecast.chance_of_rain}%` }}
                  ></div>
                  <div className="rain-text">
                    <p>{forecast.chance_of_rain}%</p>
                  </div>
                </div>
              </div>
            );
          })}
          {currentWeather.forecast.forecastday[2].hour.map((forecast) => {
            let maxC = currentWeather.forecast.forecastday[2].day.maxtemp_c;
            let currentC = forecast.temp_c;
            console.log(forecast);
            return (
              <div className="hour">
                <div className="hour-time1">
                  <p>{forecast.time.slice(10, -3)}</p>
                </div>
                <div className="hour-line">
                  <div className="hour-line-inner">
                    <div
                      className="weather-scale"
                      style={{
                        top: `${Math.round(maxC - currentC) * 10}%`,
                      }}
                    >
                      <img width="25" src={forecast.condition.icon} alt="" />
                      <p>{Math.round(forecast.temp_c)}</p>
                    </div>
                  </div>
                </div>
                <div className="rain-hour">
                  <div
                    className="rain-bar"
                    style={{ height: `${forecast.chance_of_rain}%` }}
                  ></div>
                  <div className="rain-text">
                    <p>{forecast.chance_of_rain}%</p>
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

export default Hours3;
