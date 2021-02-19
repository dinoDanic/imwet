import React from "react";
import "../style/Forecast.scss";
import Days3 from "../components/Days3";
import Hours3 from "../components/Hours3";
const Forecast = ({ currentWeather }) => {
  return (
    <div className="forecast-wraper box-style">
      <Days3 currentWeather={currentWeather} />
      <Hours3 currentWeather={currentWeather} />
    </div>
  );
};

export default Forecast;
