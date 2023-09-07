import React, { useState } from "react";

import "./TempConversion.css";

export default function TempConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="Conversion">
        <span className="temperatureDisplay me-1">
          {props.celsiustemperature}
        </span>

        <span className="unit">
          °C|
          <a href="/" alt="display Fahenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="Conversion">
        <span className="temperatureDisplay me-1">
          {Math.round((props.celsiustemperature * 9) / 5 + 32)}
        </span>

        <span className="unit">
          <a href="/" alt="display Celsius" onClick={showCelsius}>
            °C
          </a>
          |°F
        </span>
      </div>
    );
  }
}
