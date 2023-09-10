import React from "react";
import forecastsun from "./media/forecastclearskyday.png";
import forecastcloud from "./media/forecastcloud.png";
import forecastclouds from "./media/forecastclouds.png";
import forecastshower from "./media/forecastshower.png";
import forecastfewclouds from "./media/forecastfewcloudsday.png";
import forecastfog from "./media/forecastfog.png";
import forecastrain from "./media/forecastrain.png";
import forecastsnow from "./media/forecastsnow.png";
import forecaststorm from "./media/forecaststorm.png";

import "./ForecastDayDisplay.css";

export default function ForecastDayDisplay(props) {
  const dayname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastTime = new Date(props.info.time * 1000);
  let forecastNextDay = forecastTime.getDay();
  let forecastWeekday = dayname[forecastNextDay];

  //

  let maxiTemp = Math.round(props.info.temperature.maximum);
  let miniTemp = Math.round(props.info.temperature.minimum);

  //

  const codeMapping = {
    "clear-sky-day": forecastsun,
    "few-clouds-day": forecastfewclouds,
    "scattered-clouds-day": forecastcloud,
    "broken-clouds-day": forecastclouds,
    "shower-rain-day": forecastshower,
    "rain-day": forecastrain,
    "thunderstorm-day": forecaststorm,
    "snow-day": forecastsnow,
    "mist-day": forecastfog,
  };
  let icondescription = props.info.condition.icon;

  let iconpath = codeMapping[icondescription];

  return (
    <div className="ForecastDayDisplay">
      <div className="forecastWeekday">{forecastWeekday}</div>
      <div className="forecastTemperature">
        <span className="maximumTemperature">{maxiTemp}°</span>
        <span className="minimumTemperature">{miniTemp}°</span>
      </div>
      <div className="forecastIcon">
        <img src={iconpath} alt="forecast icon" />
      </div>
    </div>
  );
}
