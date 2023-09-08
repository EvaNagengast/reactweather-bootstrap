import React from "react";
import axios from"axios";
import forecastsun from "./media/forecastclearskyday.png";
import forecastcloud from "./media/forecastcloud.png";
import forecastclouds from "./media/forecastclouds.png";
import forecastshower from "./media/forecastshower.png";
import forecastfewcloudsd from "./media/forecastfewcloudsday.png";
import forecastfog from "./media/forecastfog.png";
import forecastrain from "./media/forecastrain.png";
import forecastsnow from "./media/forecastsnow.png";
import forecaststorm from "./media/forecaststorm.png";
import "./Forecast.css";
export default function Forecast(props) {
  
  const codeMapping = {
    "clear-sky-day": forecastsun,

    "few-clouds-day": forecastfewcloudsd,
    "scattered-clouds-day": forecastcloud,
    "scattered-clouds-night": forecastcloud,
    "broken-clouds-day": forecastclouds,
    "broken-clouds-night": forecastclouds,
    "shower-rain-day": forecastshower,
    "shower-rain-night": forecastshower,
    "rain-day": forecastrain,
    "rain-night": forecastrain,
    "thunderstorm-day": forecaststorm,
    "thunderstorm-night": forecaststorm,
    "snow-day": forecastsnow,
    "snow-night": forecastsnow,
    "mist-day": forecastfog,
    "mist-night": forecastfog,
  };

function handleResponse(response){console.log(response.data.daily[0].temperature.day)}




let city = props.info
  console.log(city);
 const apiKey = "5101b1tb3fba4e5cedfo0b346a6ccc32";
 const units = "metric";
 const apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
 axios.get(apiUrl).then(handleResponse);


return (
  <div className="Forecast mt-4">
    <div className="ForecastDay">Thu</div>
    <div className="ForecastTemperatures"> 18C</div>
    <div className="ForecastIcon">
      {" "}
      <img src={codeMapping[`rain-day`]} />
    </div>
  </div>
);
}
