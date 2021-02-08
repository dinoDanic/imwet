import React from "react";
import "../style/Hour.scss";

const Hour = ({ currentWeather, currentCountry }) => {
  return (
    <>
      {currentWeather && (
        <div className="hour-box-wrap">
          {console.log(currentWeather.forecast.forecastday[0].hour)}
          {currentWeather.forecast.forecastday[0].hour.map((hour) => {
            return (
              <div className="box-wrap" key={hour.time_epoch}>
                <div className="hour-box">
                  <div
                    className="box-rain"
                    style={{ bottom: `${hour.chance_of_rain}%` }}
                  ></div>
                  <div className="box-info">
                    <img
                      className="img-weater"
                      src={hour.condition.icon}
                      alt=""
                      width="30px"
                    />
                    <p>{Math.round(hour.temp_c)}°c</p>
                    <p className="p-rain">{hour.chance_of_rain}%</p>
                  </div>
                </div>
                <p className="hour-time">{hour.time.slice(10, -3)}</p>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Hour;
