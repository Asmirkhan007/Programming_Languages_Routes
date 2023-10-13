import React, { useState } from "react";
import LanguageList from "./LanguageList";

function LanguageDisplay() {
  const [filter, setFilter] = useState(""); // State to store the selected filter

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  return (
    <div className="LanguageDisplay">
      <h2>Filter by Difficulty Level:</h2>
      <div>
        <label>
          <input
            type="radio"
            value=""
            checked={filter === ""}
            onChange={handleFilterChange}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="Easy"
            checked={filter === "Easy"}
            onChange={handleFilterChange}
          />
          Easy
        </label>
        <label>
          <input
            type="radio"
            value="Moderate"
            checked={filter === "Moderate"}
            onChange={handleFilterChange}
          />
          Moderate
        </label>
        <label>
          <input
            type="radio"
            value="Advanced"
            checked={filter === "Advanced"}
            onChange={handleFilterChange}
          />
          Advanced
        </label>
      </div>
      <LanguageList filter={filter} />
    </div>
  );
}

export default LanguageDisplay;
