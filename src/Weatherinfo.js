import React from "react";
import Dateinfo from "./Dateinfo";
import Weathericon from "./Weathericon";
import TempConversion from "./TempConversion";
import "./Weatherinfo.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <ul className="dayInfo p-0">
        <li>
          <Dateinfo time={props.info.timestamp} />
        </li>
        <li className="weatherCondition text-capitalize">
          {props.info.condition}
        </li>
      </ul>
      <div className="row">
        <div className="col-7">
          <div className="row tempDisplay">
            <div className="col-6">
              <Weathericon icon={props.info.icon} alt={props.info.icon} />
            </div>
            <div className="col-6">
              <TempConversion celsiustemperature={props.info.temp} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>feels like:{props.info.feels}</li>
            <li>humidity:{props.info.humidity}</li>
            <li>windspeed:{props.info.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
