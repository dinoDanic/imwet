import React, { useEffect, useRef } from "react";
import { motion, useElementScroll } from "framer-motion";
import { TweenMax, Power3 } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
//Images
import sunCloud from "../img/sun-cloud.png";
import { useHistory } from "react-router-dom";
import cloud1img from "../img/cloud1.png";
import cloud2img from "../img/cloud2.png";
import cloud3img from "../img/cloud3.png";
//Styles & Animations
import "../style/TodayBar.scss";

const TodayBar = ({ currentWeather, currentCountry }) => {
  let today = new Date();
  let date =
    today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();

  let cloud1 = useRef();
  let cloud2 = useRef();
  let cloud3 = useRef();
  let todayBar = useRef();
  useEffect(() => {
    TweenMax.to(cloud1, {
      opacity: 1,
      x: "200%",
      duration: 60,
      yoyo: true,
      repeat: -1,
    });
    TweenMax.to(cloud2, {
      opacity: 1,
      x: "300%",
      duration: 45,
      delay: 10,
      repeat: -1,
    });
    TweenMax.to(cloud3, {
      x: "-300%",
      opacity: 0.6,
      duration: 60,
      delay: 2,
      repeat: -1,
    });
  }, []);

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
