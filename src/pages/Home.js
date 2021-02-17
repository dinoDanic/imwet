import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { motion } from "framer-motion";
//Style
import "../style/Home.scss";
//Components
import TodayBar from "../components/TodayBar";
import SearchBar from "../components/SearchBar.js";
import SevenDays from "../components/SevenDays";
import WeatherControl from "../components/WeatherControl";
import WeatherAnimations from "../components/WeatherAnimations";
import ThunderBolt from "../components/ThunderBolt";

import {
  sectionContainerAni,
  sectionChildrenAni,
  mainWraperAni,
} from "../animations/frontPageMotion";
import { buildQueries } from "@testing-library/react";

//API

const Home = () => {
  const [currentCountry, setCurrentCountry] = useState("Sveti Ivan Zelina");
  const [currentWeather, setCurrentWeather] = useState(0);
  const [wind, setWind] = useState(false);
  const [snow, setSnow] = useState(false);
  const [rain, setRain] = useState(false);
  const [thunder, setThunder] = useState(false);
  const [numberX, setNumberX] = useState(0);
  const [repeatThunder, setRepeatThunder] = useState(2000);
  const [thunderTIME, setThunderTIME] = useState(false);
  //functios
  const goToHandler = () => {
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
        `https://api.weatherapi.com/v1/forecast.json?key=d13d69e397d6417e80f162940211602&q=${currentCountry}&days=7`
      )
      .then((data) => {
        setCurrentWeather(data.data);
        goToHandler();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentCountry]);

  //THUNDER THING

  const getnumber = () => {
    return repeatThunder;
  };
  useInterval(() => {
    setNumberX(Math.round(Math.random() * 1600) - 800);
    setRepeatThunder(Math.round(Math.random() * 5000));

    console.log("THUNDER");
    console.log(repeatThunder);
  }, getnumber());
  function useInterval(callback, delay) {
    const savedCallback = useRef();
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  // custom JS animation for thunder effect

  return (
    <motion.div className="main-wraper">
      <ThunderBolt thunder={thunder} numberX={numberX} />
      <motion.div
        className="wraper"
        variants={{
          pulse: {
            y: [0, -15, 10, -5, 0],
            transition: {
              duration: 0.18,
              delay: 0.2,
            },
          },
        }}
        initial={{ background: "#d2f0ff" }}
        animate={thunderTIME ? "pulse" : null}
      >
        <WeatherAnimations
          currentWeather={currentWeather}
          currentCountry={currentCountry}
          wind={wind}
          setWind={setWind}
          snow={snow}
          setSnow={setSnow}
          rain={rain}
          setRain={setRain}
          thunder={thunder}
          setThunder={setThunder}
        />
        <motion.div className="section section1" variants={sectionChildrenAni}>
          <TodayBar
            currentWeather={currentWeather}
            currentCountry={currentCountry}
            wind={wind}
            setWind={setWind}
          />
        </motion.div>
        <motion.div className="section section2" variants={sectionChildrenAni}>
          <SearchBar
            currentWeather={currentWeather}
            setCurrentCountry={setCurrentCountry}
            currentCountry={currentCountry}
          />
          <SevenDays
            currentWeather={currentWeather}
            currentCountry={currentCountry}
          />
        </motion.div>
        <motion.div className="section section3" variants={sectionChildrenAni}>
          <WeatherControl
            wind={wind}
            setWind={setWind}
            snow={snow}
            setSnow={setSnow}
            rain={rain}
            setRain={setRain}
            thunder={thunder}
            setThunder={setThunder}
            thunderTIME={thunderTIME}
            setThunderTIME={setThunderTIME}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Home;
