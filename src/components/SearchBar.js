import React, { useState } from "react";
import { motion } from "framer-motion";
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
      <motion.div
        className="search-bar"
        variants={{
          show: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5, delay: 0.15 },
          },
          hidden: { opacity: 0, scale: 0.95 },
        }}
        animate="show"
        initial="hidden"
      >
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
      </motion.div>
    </div>
  );
};
export default SearchBar;
