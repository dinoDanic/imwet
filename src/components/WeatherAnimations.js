import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import "../style/Animations.scss";
import { useElementScroll } from "framer-motion";
gsap.registerPlugin(MotionPathPlugin);

const WeatherAnimations = (currentWind) => {
  const [aniLeaf, setAniLeaf] = useState(true);

  useEffect(() => {
    if (!currentWind > 0) {
      console.log(currentWind);
    }
  }, [currentWind]);

  gsap.config({
    nullTargetWarn: false,
  });
  const leaf1 = document.querySelector("#leaf1");
  const leaf2 = document.querySelector("#leaf2");
  const leaf3 = document.querySelector("#leaf3");
  const leaf4 = document.querySelector("#leaf4");
  const leaf5 = document.querySelector("#leaf5");
  const path = document.querySelector("#path");
  const path2 = document.querySelector("#path2");
  gsap.set(leaf1, {
    yPercent: 1250,
    transformOrigin: "0% 50%",
  });
  gsap.set(leaf2, {
    yPercent: 50,
    transformOrigin: "150% 250%",
  });
  gsap.set(leaf3, {
    yPercent: 1550,
  });
  gsap.set(leaf5, {
    yPercent: 1950,
  });
  gsap.to(leaf1, {
    duration: 2,
    motionPath: path,
    rotation: 900,
    repeat: -1,
  });
  gsap.to(leaf2, {
    duration: 2,
    motionPath: path,
    rotation: 500,
    repeat: -1,
    delay: 1,
  });
  gsap.to(leaf3, {
    duration: 3,
    motionPath: path,
    rotation: 800,
    delay: 2,
    repeat: -1,
  });
  gsap.to(leaf4, {
    duration: 4,
    motionPath: path2,
    rotation: 800,
    delay: 3,
    repeat: -1,
  });
  gsap.to(leaf5, {
    duration: 3,
    motionPath: path,
    rotation: 700,
    delay: 4,
    repeat: -1,
  });

  return (
    <>
      {aniLeaf && (
        <div className="leaf-animation">
          <svg width="100%" height="70vh">
            <path
              fill="darkgreen"
              id="leaf"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>

            <path
              fill="green"
              id="leaf2"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>
            <path
              fill="#84612d"
              id="leaf3"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>
            <path
              fill="#c6a903"
              id="leaf4"
              d="M41.9,56.3l0.1-2.5c0,0,4.6-1.2,5.6-2.2c1-1,3.6-13,12-15.6c9.7-3.1,19.9-2,26.1-2.1c2.7,0-10,23.9-20.5,25 c-7.5,0.8-17.2-5.1-17.2-5.1L41.9,56.3z"
            ></path>
            <path
              fill="#d84800"
              id="leaf5"
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
