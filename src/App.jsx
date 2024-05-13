import React, { useState } from "react";
import FoodBox from "./resources/FoodBox";
import Search from "./resources/SearchBar";
import FoodData from "./resources/FoodData";
import "./App.css";

const App = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchedFoods, setsearchedFoods] = useState(FoodData);

  const handleSearch = (input) => {
    setSearchInput(input);
    const filtered = FoodData.filter((food) =>
      food.name.toLowerCase().includes(input.toLowerCase())
    );
    setsearchedFoods(filtered);
  };

  return (
    <div className="container">
      <Search onSearch={handleSearch} />
      {searchedFoods.map((food, index) => (
        <FoodBox key={index} food={food} />
      ))}
    </div>
  );
};

export default App;
