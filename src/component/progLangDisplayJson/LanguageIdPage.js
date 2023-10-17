import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function LanguageIdPage() {
  const { id } = useParams();
  const [filteredLanguage, setFilteredLanguage] = useState(null);

  const getData = async () => {
    try {
      console.log("Fetching data...");
      const response = await fetch("http://localhost:3000/languages.json");
      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.status}`);
      }

      const data = await response.json();
      console.log("Data fetched successfully:", data);

      const language = data.find((language) => language.id === id);
      if (language) {
        setFilteredLanguage(language);
      } else {
        console.log(`No data found with ID ${id}`);
      }
    } catch (error) {
      console.error("Error fetching language data:", error);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div>
      <h1>LanguageIdDetails</h1>
      <div>
        {filteredLanguage ? (
          <>
            <p>
              Language ID: <strong>{filteredLanguage.id}</strong>
            </p>
            <p>Language Name: {filteredLanguage.name}</p>
            <p>Language Description: {filteredLanguage.description}</p>
            {/* Other properties can be displayed here */}
          </>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
