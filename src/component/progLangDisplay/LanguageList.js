import React from "react";
import languages from "./languages";

function LanguageList({ filter }) {
  const filteredLanguages = filter
    ? languages.filter((language) => language.difficulty === filter)
    : languages;

  return (
    <div className="language-list">
      <h1>Programming Languages displayed using List</h1>
      <ul>
        {filteredLanguages.map((language, index) => (
          <li key={index}>
            <h2>{language.name}</h2>
            <p>Description: {language.description}</p>
            <p>Difficulty Level: {language.difficulty}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageList;
