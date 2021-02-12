import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
//Images
import sunCloud from "../img/sun-cloud.png";

import cloud1img from "../img/cloud1.png";
import cloud2img from "../img/cloud2.png";
import cloud3img from "../img/cloud3.png";
//Styles & Animations
import "../style/TodayBar.scss";
import { Timeline, TweenMax } from "gsap/gsap-core";

const TodayBar = ({ currentWeather, currentCountry, wind, setWind }) => {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  let cloud1 = useRef();
  let cloud2 = useRef();
  let cloud3 = useRef();
  let todayBar = useRef();

  useEffect(() => {
    if (wind) {
      gsap.fromTo(
        [cloud1, cloud2, cloud3],
        { opactiy: 1 },
        { opacity: 0, duration: 0.3 }
      );
      setTimeout(() => {
        console.log("sad");
        gsap.fromTo(
          cloud1,
          { xPercent: -100, opacity: 1 },
          { xPercent: 250, repeat: -1, duration: 2 }
        );
        gsap.fromTo(
          cloud2,
          { xPercent: -100, opacity: 1 },
          { xPercent: 250, repeat: -1, duration: 2.2, delay: 1 }
        );
        gsap.fromTo(
          cloud3,
          { xPercent: -100, opacity: 1 },
          { xPercent: 250, repeat: -1, duration: 1.5, delay: 0.3 }
        );
      }, 300);
    }
    if (!wind) {
      gsap.fromTo(
        [cloud1, cloud2, cloud3],
        { opactiy: 1 },
        { opacity: 0, duration: 0.3 }
      );
      setTimeout(() => {
        console.log("sad");
        gsap.fromTo(
          cloud1,
          { xPercent: -100, opacity: 1 },
          { xPercent: 250, repeat: -1, duration: 60 }
        );
        gsap.fromTo(
          cloud2,
          { xPercent: -100, opacity: 1 },
          { xPercent: 250, repeat: -1, duration: 122 }
        );
        gsap.fromTo(
          cloud3,
          { xPercent: -100, opacity: 1 },
          { xPercent: 250, repeat: -1, duration: 95 }
        );
      }, 300);
    }
  }, [wind]);

  return (
    <>
      <div
        className="today-bar"
        ref={(el) => {
          todayBar = el;
        }}
      >
        <div
          className="cloud1"
          ref={(el) => {
            cloud1 = el;
          }}
        >
          <img src={cloud1img} alt="" />
        </div>
        <div className="cloud2">
          <img
            src={cloud2img}
            alt=""
            width="110px"
            ref={(el) => {
              cloud2 = el;
            }}
          />
        </div>
        <div className="cloud3">
          <img
            src={cloud3img}
            alt=""
            ref={(el) => {
              cloud3 = el;
            }}
          />
        </div>
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
    </>
  );
};

export default TodayBar;
