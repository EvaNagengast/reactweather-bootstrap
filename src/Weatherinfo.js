import React from "react";
import Dateinfo from "./Dateinfo";
import Weathericon from "./Weathericon";
import TempConversion from "./TempConversion";
import "./Weatherinfo.css";

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row">
        <div className="col-sm-7">
          <div className="row tempDisplay d-flex align-items-center ">
            <div className="Weathericon col-6 text-center">
              <Weathericon icon={props.info.icon} alt={props.info.icon} />
            </div>
            <div className="col-6">
              <TempConversion celsiustemperature={props.info.temp} />
            </div>
          </div>
        </div>
        <div className="col-sm-5 text-center text-sm-left">
          <ul className="dayInfo pt-4">
            <Dateinfo time={props.info.timestamp} />

            <li className="weatherCondition text-capitalize">
              {props.info.condition}
            </li>

            <li>Humidity: {props.info.humidity} %</li>
            <li>Windspeed: {props.info.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
