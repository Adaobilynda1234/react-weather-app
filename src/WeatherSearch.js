import React, { useState } from "react";
import axios from "axios";

import Weatherinfo from "./WeatherInfo";
import "./WeatherSearch.css";

export default function WeatherSearch(props) {
  const [weatherData, setweatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultcity);

  function handleResponse(response) {
    console.log(response.data);
    setweatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      description: response.data.weather[0].description,
    });
  }

  function search() {
    const apikey = "a2459a6fefa833ef17e266c4bd3e8e03";
    let apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    axios.get(apiurl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    //search for a city
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city..."
                className="form-control"
                autoFocus="on "
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <Weatherinfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
