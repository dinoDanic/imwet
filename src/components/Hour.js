import React from "react";
import "../style/Hour.scss";

const Hour = ({ currentWeather, currentCountry }) => {
  const rainBar = (hour) => {
    document.querySelector(".box-rain");
    rainBar.style.top = "20%";
  };
  return (
    <>
      {currentWeather && (
        <div className="hour-box-wrap">
          {console.log(currentWeather.forecast.forecastday[0].hour)}
          {currentWeather.forecast.forecastday[0].hour.map((hour) => {
            return (
              <div className="hour-box" key={hour.time_epoch}>
                <div
                  className="box-rain"
                  style={{ bottom: `${hour.chance_of_rain}%` }}
                ></div>
                <div className="box-info">
                  <p>{hour.time.replace("2021-02-07", "")}</p>
                  <img src={hour.condition.icon} alt="" width="40px" />
                  <p className="p-rain">{hour.chance_of_rain}%</p>
                  <p>{Math.round(hour.temp_c)}°c</p>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Hour;
