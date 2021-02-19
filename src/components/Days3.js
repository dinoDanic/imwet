import React from "react";
import "../style/Days3.scss";
const Days3 = ({ currentWeather }) => {
  return (
    <>
      {currentWeather && (
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
      )}
    </>
  );
};

export default Days3;
