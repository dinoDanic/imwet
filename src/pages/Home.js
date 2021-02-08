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
  const [currentLocalTime, setCurrentLocalTime] = useState("");

  //functions
  const goToHandler = () => {
    console.log(currentLocalTime);
    const boxs = document.querySelectorAll(".hour-time");
    let current = new Date();
    boxs.forEach((data) => {
      let hour = current.getHours();
      if (hour < 10) {
        hour = "0" + hour;
      }
      if (data.innerText === `${hour}`) {
        setTimeout(() => {
          data.style.color = "#94B2FF";
          data.innerText = "Current";
          data.style.fontWeight = "800";
          data.parentNode.firstChild.style.border = "2px solid #94B2FF";
          data.parentNode.firstChild.classList.add("goto");
          data.parentNode.firstChild.scrollIntoView({
            behavior: "smooth",
            inline: "start",
          });
        }, 1000);
      } else {
        data.parentNode.firstChild.classList.remove("goto");
      }
    });
  };
  useEffect(() => {
    axios
      .get(
        `https://api.weatherapi.com/v1/forecast.json?key=28618711c84f44adbf1202156210602&q=${currentCountry}&days=7`
      )
      .then((data) => {
        setCurrentWeather(data.data);
        let getTime = data.data.location.localtime;
        setCurrentLocalTime(data.data.location.localtime.slice(0, 0.2));
        goToHandler();
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
