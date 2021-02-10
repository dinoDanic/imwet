import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { TweenMax, Power3 } from "gsap";
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
import MoreInfo from "../components/MoreInfo";
//API

const Home = () => {
  const [currentCountry, setCurrentCountry] = useState("Sveti Ivan Zelina");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [currentLocalTime, setCurrentLocalTime] = useState("");
  let wraperRef = useRef();

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
          data.classList.add("hour-time-a");
          data.innerText = "Current";
          data.parentNode.firstChild.classList.add("goto");
          data.parentNode.firstChild.scrollIntoView({
            behavior: "smooth",
            inline: "start",
            block: "start",
          });
        }, 1000);
      } else {
        data.classList.remove("hour-time-a");
        data.parentNode.firstChild.classList.remove("goto");
      }
    });
  };
  //Use effect AXIO
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
  //Use effect GSAP
  useEffect(() => {
    TweenMax.to(wraperRef, {
      opacity: 1,
      duration: 3,
      stagger: 0.2,
    });
  }, []);
  return (
    <div className="main-wraper">
      <div
        className="wraper"
        ref={(el) => {
          wraperRef = el;
        }}
      >
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
          {/*           <MoreInfo /> */}
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
