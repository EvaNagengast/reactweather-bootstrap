import React, { useState } from "react";
import axios from "axios";

import Weatherinfo from "./Weatherinfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [apiReady, setApiReady] = useState(false);
  const [weatherinfo, setWeatherinfo] = useState(null);
  const [city, setCity] = useState("London");

  function handleResponse(response) {
    setApiReady(true);

    setWeatherinfo({
      name: response.data.city,
      condition: response.data.condition.description,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feels: response.data.temperature.feels_like,
      timestamp: response.data.time,
      icon: response.data.condition.icon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();

    search();
  }
  function handleCityInput(event) {
    setCity(event.target.value);
  }

  function search() {
    const apiKey = "5101b1tb3fba4e5cedfo0b346a6ccc32";
    // `4cc095d48157ba3cc2e7da6b0b98bc8a`;
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    //  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);
  }

  if (apiReady) {
    return (
      <div className="Weather p-5">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              {" "}
              <h1>{weatherinfo.name}</h1>
            </div>
            <div className="col-4">
              <input
                type="text"
                placeholder="Enter a city"
                className="searchinput w-100"
                autoFocus="on"
                onChange={handleCityInput}
              ></input>
            </div>
            <div className="col-2">
              <input type="submit" className="searchbutton"></input>
            </div>
          </div>
        </form>

        <Weatherinfo info={weatherinfo} />
        <Forecast info={weatherinfo.name} />
      </div>
    );
  } else {
    search();
    return <div className="loading">Fetching weather...</div>;
  }
}
