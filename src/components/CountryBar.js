import React from "react";

//Style
import "../style/CountryBar.scss";
//Images
import londonImage from "../img/london1.jpg";
import duborvnikImage from "../img/dubrovnik.jpg";
import newyork from "../img/newyork.jpg";

const CountryBar = () => {
  return (
    <div className="country-bar">
      <div className="country-box active">
        <img src={londonImage} alt="" />
        <p>London, England</p>
      </div>
      <div className="country-box">
        <img src={duborvnikImage} alt="" />
        <p>New York, USA</p>
      </div>
      <div className="country-box">
        <img src={newyork} alt="" />
        <p>Dubrovnik, Croatia</p>
      </div>
      <div className="country-box add-new">
        <p>+</p>
      </div>
    </div>
  );
};

export default CountryBar;
