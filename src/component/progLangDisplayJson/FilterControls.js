import React from "react";

function FilterControls({ filter, onFilterChange }) {
  return (
    <div>
      <label>
        <input
          type="radio"
          value=""
          checked={filter === ""}
          onChange={onFilterChange}
        />
        All
      </label>
      <label>
        <input
          type="radio"
          value="Easy"
          checked={filter === "Easy"}
          onChange={onFilterChange}
        />
        Easy
      </label>
      <label>
        <input
          type="radio"
          value="Moderate"
          checked={filter === "Moderate"}
          onChange={onFilterChange}
        />
        Moderate
      </label>
      <label>
        <input
          type="radio"
          value="Advanced"
          checked={filter === "Advanced"}
          onChange={onFilterChange}
        />
        Advanced
      </label>
    </div>
  );
}

export default FilterControls;
