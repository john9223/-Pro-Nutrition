import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    const newInputValue = e.target.value;
    setInputValue(newInputValue);
    onSearch(newInputValue);
  };

  return (
    <div className="search-field">
      <div className="search-control">
        <input
          className="search-input"
          type="text"
          placeholder="What are you eating?"
          value={inputValue}
          onChange={handleInputChange}
        />
      </div>
    </div>
  );
};

export default Search;
