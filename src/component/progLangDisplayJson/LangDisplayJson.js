import React from "react";
import "./style.css";
import LanguageDisplay from "./LanguageDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageDetail from "./LanguageDetail";

function LangDisplayJson() {
  return (
    <div className="App">
      <LanguageDisplay />
    </div>
  );
}

export default LangDisplayJson;
