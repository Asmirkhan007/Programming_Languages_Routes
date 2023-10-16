import React from "react";
import { Link } from "react-router-dom";

function LanguageCard({ language }) {
  return (
    <div className="language-card">
      <h3>{language.name}</h3>
      <p>Difficulty: {language.difficulty}</p>
      <Link to={`/language/${language.id}`}>View Details</Link>
    </div>
  );
}

export default LanguageCard;
