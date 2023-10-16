import React from "react";
import "./style.css";
import LanguageDisplay from "./LanguageDisplay";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LanguageDetail from "./LanguageDetail";

function LangDisplayJson() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LanguageDisplay />} />
          <Route path="/language/{id}" element={<LanguageDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default LangDisplayJson;
