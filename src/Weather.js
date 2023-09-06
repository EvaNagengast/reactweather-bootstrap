import React, { useState } from "react";
import Dateinfo from "./Dateinfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [apiReady, setApiReady] = useState(false);

  const [weatherinfo, setWeatherinfo] = useState(null);

  function handleResponse(response) {
    setApiReady(true);

    setWeatherinfo({
      name: response.data.city,
      condition: response.data.condition.description,
      temp: Math.round(response.data.temperature.current),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      feels: response.data.temperature.feels_like,
    });
  }

  if (apiReady) {
    return (
      <div className="Weather p-5">
        <form>
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
              ></input>
            </div>
            <div className="col-2">
              <input type="submit" className="searchbutton"></input>
            </div>
          </div>
        </form>

        <ul className="dayInfo p-0">
          <li>
            <Dateinfo />
          </li>
          <li className="weatherCondition text-capitalize">
            {weatherinfo.condition}
          </li>
        </ul>
        <div className="row">
          <div className="col-7">
            <div className="row tempDisplay">
              <div className="col-8">
                <img
                  src="https://transcendent-dodol-313db9.netlify.app/media/imageshelp/chariot.png"
                  alt="sun"
                ></img>
              </div>
              <div className="col-4">{weatherinfo.temp}°C</div>
            </div>
          </div>
          <div className="col-5">
            <ul>
              {" "}
              <li>feels like:{weatherinfo.feels}</li>
              <li>humidity:{weatherinfo.humidity}</li>
              <li>windspeed:{weatherinfo.wind}</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.cityName;
    const apiKey = "5101b1tb3fba4e5cedfo0b346a6ccc32";
    // `4cc095d48157ba3cc2e7da6b0b98bc8a`;
    const units = "metric";
    const apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    //  `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${units}&appid=${apiKey}`;

    axios.get(apiUrl).then(handleResponse);

    return <div className="loading">Fetching weather...</div>;
  }
}
