import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import languageData from "./languages.json"; // Import the JSON data

function LanguageDetail() {
  const { id } = useParams();
  const [languageDetails, setLanguageDetails] = useState(null);

  // Fetch language details based on the "id" when the component mounts
  useEffect(() => {
    // Replace the following with logic to find the language based on the ID
    const selectedLanguage = languageData.find(
      (language) => language.id === id
    );

    if (selectedLanguage) {
      setLanguageDetails(selectedLanguage);
    } else {
      console.error("Language not found.");
    }
  }, [id]);

  return (
    <div>
      <h2>Language Detail Page</h2>
      {languageDetails ? (
        <div>
          <p>Language ID: {languageDetails.id}</p>
          <p>Language Name: {languageDetails.name}</p>
          {/* Display other language details here */}
        </div>
      ) : (
        <p>Loading language details...</p>
      )}
    </div>
  );
}

export default LanguageDetail;
