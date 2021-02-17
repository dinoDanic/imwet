import React, { useState } from "react";
import "../style/SearchBar.scss";
import axios from "axios";
import gradovi from "../gradovi";

const SearchBar = ({ setCurrentCountry }) => {
  const [inputValue, setInputValue] = useState("");
  const buttonHandler = (e) => {
    e.preventDefault();
    const inputVal = document.querySelector(".input-search");
    setCurrentCountry(inputVal.value);
  };

  return (
    <div>
      <div className="search-bar">
        <form onSubmit={buttonHandler}>
          <input
            placeholder="Change Locations"
            className="input-search box-style"
            type="text"
            id="input"
            onChange={(event) => setInputValue(event.target.value)}
          />
          <div id="match-list"></div>
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
