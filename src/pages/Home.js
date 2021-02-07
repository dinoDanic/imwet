import React, { useEffect, useState } from "react";
import axios from "axios";
//Images
//Style
import "../style/Home.scss";
//Components
import TodayBar from "../components/TodayBar";
import SearchBar from "../components/SearchBar.js";
import CountryBar from "../components/CountryBar";
import SevenDays from "../components/SevenDays";
import Empty from "../components/Empty";
import Hour from "../components/Hour";
//API

const Home = () => {
  const [currentCountry, setCurrentCountry] = useState("Sveti Ivan Zelina");
  const [currentWeather, setCurrentWeather] = useState(null);
  useEffect(() => {
    axios
      .get(
        `http://api.weatherapi.com/v1/forecast.json?key=28618711c84f44adbf1202156210602&q=${currentCountry}&days=7`
      )
      .then((data) => {
        setCurrentWeather(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentCountry]);
  return (
    <div className="main-wraper">
      <div className="wraper">
        <div className="section section1">
          <TodayBar
            currentWeather={currentWeather}
            currentCountry={currentCountry}
          />
        </div>
        <div className="section section2">
          <SearchBar
            currentWeather={currentWeather}
            setCurrentCountry={setCurrentCountry}
            currentCountry={currentCountry}
          />
          <SevenDays
            currentWeather={currentWeather}
            currentCountry={currentCountry}
          />
          <Hour
            currentWeather={currentWeather}
            currentCountry={currentCountry}
          />
        </div>
        <div className="section section3">
          <Empty />
        </div>
      </div>
    </div>
  );
};

export default Home;
