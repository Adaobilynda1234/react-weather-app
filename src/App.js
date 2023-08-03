import React from "react";
import WeatherSearch from "./WeatherSearch";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch />
        <footer>
          This project was coded by
          <a
            href="https://github.com/Adaobilynda1234/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Adaobi Lynda
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/Adaobilynda1234/react-weather-app.git"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>
        </footer>
      </div>
    </div>
  );
}
