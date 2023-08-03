import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />
        <footer>
          This project was coded by
          <a
            href="https://github.com/Adaobilynda1234/react-weather-app.git"
            target="_blank"
          >
            {" "}
            Adaobi Lynda
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Adaobilynda1234/react-weather-app.git"
            target="_blank"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
