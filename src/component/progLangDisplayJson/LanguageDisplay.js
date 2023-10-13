import React, { useState, useEffect } from "react";
import "./style.css";
import FilterControls from "./FilterControls";
import LanguageCard from "./LanguageCard";
import Pagination from "./Pagination";

function LanguageDisplay() {
  // State variables
  const [filter, setFilter] = useState(""); // Store the selected filter
  const [languages, setLanguages] = useState([]); // Store language data
  const [loading, setLoading] = useState(true); // Indicate if data is being loaded
  const [currentPage, setCurrentPage] = useState(1); // Store the current page
  const itemsPerPage = 4; // Number of cards to display per page (2x2 grid)

  // Handle filter change
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
    setCurrentPage(1); // Reset the current page when the filter changes
  };

  // Fetch language data from JSON file
  const getData = () => {
    fetch("languages.json")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
        setLanguages(data); // Set the data in the 'languages' state
        setLoading(false); // Update 'loading' to indicate data has been loaded
      })
      .catch(function (error) {
        console.error("Error fetching language data:", error);
        setLoading(false);
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Filter the languages based on the selected difficulty
  const filteredLanguages = filter
    ? languages.filter((language) => language.difficulty === filter)
    : languages;

  // Calculate the total number of pages based on filtered data
  const totalPages = Math.ceil(filteredLanguages.length / itemsPerPage);

  // Calculate the start and end index for the displayed languages on the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedLanguages = filteredLanguages.slice(startIndex, endIndex);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="LanguageDisplay">
      <h2>Filter by Difficulty Level:</h2>
      {/* Filter controls */}
      <FilterControls filter={filter} onFilterChange={handleFilterChange} />

      {loading ? (
        // Show loading message while data is being fetched
        <p>Loading...</p>
      ) : (
        // Display language cards and pagination when data is loaded
        <div className="language-list">
          <h1>Programming Languages Displayed Using Json Data</h1>
          {/* Grid layout for language cards */}
          <div className="language-grid">
            {displayedLanguages.map((language, index) => (
              <div key={index} className="language-grid-item">
                <LanguageCard language={language} />
              </div>
            ))}
          </div>

          {/* Pagination controls */}
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      )}
    </div>
  );
}

export default LanguageDisplay;
