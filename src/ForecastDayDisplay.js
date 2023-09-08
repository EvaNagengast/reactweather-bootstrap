import React from "react";
import "./ForecastDayDisplay.css";

export default function ForecastDayDisplay(props) {
  console.log(props);
  const dayname = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let forecastTime = new Date(props.info.time * 1000);
  let forecastNextDay = forecastTime.getDay();
  let forecastWeekday = dayname[forecastNextDay];

  let maxiTemp = Math.round(props.info.temperature.maximum);
  let miniTemp = Math.round(props.info.temperature.minimum);
  //    console.log(currentTime);
  return (
    <div className="ForecastDayDisplay">
      <div className="forecastWeekday">{forecastWeekday}</div>
      <div className="forecastTemperature">
        <span className="maximumTemperature">{maxiTemp}°</span>
        <span className="minimumTemperature">{miniTemp}°</span>
      </div>
    </div>
  );
}
