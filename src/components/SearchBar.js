import React from "react";
import "../style/SearchBar.scss";

const SearchBar = ({ setCurrentCountry }) => {
  const inputHandler = () => {};
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
            className="input-search"
            type="text"
            onClick={() => inputHandler()}
          />
        </form>
      </div>
    </div>
  );
};
export default SearchBar;
