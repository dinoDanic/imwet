import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../style/Animations.scss";
import { Timeline, TimelineMax } from "gsap/gsap-core";
import { _checkPlugin } from "gsap/gsap-core";
gsap.registerPlugin(MotionPathPlugin);

const WeatherAnimations = ({
  currentWeather,
  currentCountry,
  wind,
  setWind,
}) => {
  gsap.config({
    nullTargetWarn: false,
  });
  let leaf1 = useRef(null);
  let leaf2 = useRef(null);
  let leaf3 = useRef(null);
  let leaf4 = useRef(null);
  let leaf5 = useRef(null);
  let leafAni = useRef(null);

  useEffect(() => {
    if (currentWeather) {
      if (currentWeather.current.wind_kph > 12) {
        setWind(true);
      } else {
        if (wind) {
          gsap.to([leaf1, leaf2, leaf3, leaf4], { opacity: 0, duration: 1 });
          setTimeout(() => {
            setWind(false);
          }, 1000);
        }
      }
    }
    if (wind) {
      gsap.set(leaf1, { y: 100, transformOrigin: "120% 50%" });
      gsap.set(leaf2, { y: 150, transformOrigin: "-120% 150%" });
      gsap.set(leaf3, { y: 300, transformOrigin: "10% 50%" });
      gsap.set(leaf4, { y: 350, transformOrigin: "120% 250%" });
      gsap.set(leaf5, { y: 500, transformOrigin: "-80% 10%" });
      console.log("turrrr");

      gsap.to(leaf1, {
        rotate: 300,
        delay: 1,
        y: 200,
        x: 1600,
        repeat: -1,
        duration: 2,
      });
      gsap.to(leaf2, {
        rotate: 500,
        delay: 2,
        x: 1600,
        y: 250,
        repeat: -1,
        duration: 3,
      });
      gsap.to(leaf3, {
        rotate: 300,
        delay: 3,
        y: 450,
        x: 1600,
        repeat: -1,
        duration: 2.5,
      });
      gsap.to(leaf4, {
        rotate: 400,
        delay: 4,
        y: 560,
        x: 1600,
        repeat: -1,
        duration: 2.2,
      });
      gsap.to(leaf5, {
        rotate: 600,
        delay: 5,
        x: 1600,
        y: 600,
        repeat: -1,
        duration: 1.5,
      });
    }
  }, [currentWeather, wind]);

  return (
    <>
      {wind && (
        <div className="leaf-animation" ref={(el) => (leafAni = el)}>
          <svg width="100%" height="70vh">
            <path
              ref={(el) => (leaf1 = el)}
              className="leaf1"
              fill="darkgreen"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>

            <path
              ref={(el) => (leaf2 = el)}
              fill="green"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>
            <path
              ref={(el) => (leaf3 = el)}
              fill="#84612d"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>
            <path
              ref={(el) => (leaf4 = el)}
              fill="#c6a903"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>
            <path
              ref={(el) => (leaf5 = el)}
              fill="#3cd834"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>

            <path
              id="path"
              d="M1 29.5C119.833 2.09808e-05 434.5 -31.6 742.5 78C1050.5 187.6 1301.5 140.667 1388.5 103.5"
              stroke="none"
              fill="none"
            />
            <path
              id="path2"
              d="M1 592C119.833 562.5 373.787 154.471 647 334C1379 815 979 -81.5001 1452.5 6.99989"
              stroke="none"
              fill="none"
            />
          </svg>
        </div>
      )}
    </>
  );
};

export default WeatherAnimations;
