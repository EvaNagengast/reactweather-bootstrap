import React, { useState, useEffect } from "react";
import axios from "axios";
import ForecastDayDisplay from "./ForecastDayDisplay";

import "./Forecast.css";
export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);


  useEffect(() => {
    setLoaded(false);
  }, [props.info.name]);



  console.log(props.info);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  
  }

  if (loaded) {
    return (
      <div className="Forecast  mt-4">
   
        <div className="row">
          <div className="col">
            <ForecastDayDisplay info={forecast[1]} />
          </div> 
          <div className="col">
            <ForecastDayDisplay info={forecast[2]} />
          </div> 
          <div className="col">
            <ForecastDayDisplay info={forecast[3]} />
          </div> 
          <div className="col d-none-on-xs">
            <ForecastDayDisplay info={forecast[4]} />
          </div> 
          <div className="col d-none d-sm-block">
            <ForecastDayDisplay info={forecast[5]} />
          </div>
        </div>
      </div>
    );
  } else {
    let city = props.info.name;
    let apiKey = "5101b1tb3fba4e5cedfo0b346a6ccc32";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
