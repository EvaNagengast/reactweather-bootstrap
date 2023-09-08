import React, { useState } from "react";
import axios from "axios";
import ForecastDayDisplay from "./ForecastDayDisplay";

import ForecastIcon from "./ForecastIcon";



import "./Forecast.css";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);

    setLoaded(true);
  }

  if (loaded) {
//   console.log(forecast[2])
    return (
         
      <div className="Forecast mt-4">
        <ForecastDayDisplay info={forecast[1]} />
      
        <div className="forecasticon">
          <ForecastIcon icon={forecast} />
        </div>
      </div>
    );
  } else {
    let city = props.info;

    let apiKey = "5101b1tb3fba4e5cedfo0b346a6ccc32";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
