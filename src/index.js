import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import LangDisplayJson from "./component/progLangDisplayJson/LangDisplayJson";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <LangDisplayJson />
  </React.StrictMode>
);

reportWebVitals();
