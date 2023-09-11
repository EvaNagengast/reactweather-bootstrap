import React from "react";
import Dateinfo from "./Dateinfo";
import Weathericon from "./Weathericon";
import TempConversion from "./TempConversion";
 import "./Weatherinfo.css"

export default function Weatherinfo(props) {
  return (
    <div className="Weatherinfo">
      <div className="row">
        <div className="col-sm-7">
          <div className="row d-flex align-items-center ">
            <div className="col-6 text-center">
              <Weathericon icon={props.info.icon} alt={props.info.icon} />
            </div>
            <div className="col-6 p-2">
              <TempConversion celsiustemperature={props.info.temp} />
            </div>
          </div>
        </div>
        <div className="col-sm-5 p-0 p-sm-4 ">
          <ul className="p-0 pt-3  text-center text-sm-start">
            <Dateinfo time={props.info.timestamp} />

            <li className="text-capitalize">
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
