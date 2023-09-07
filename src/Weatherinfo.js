import React from "react";
import Dateinfo from "./Dateinfo";
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
            <div className="col-8">
              <img
                src="https://transcendent-dodol-313db9.netlify.app/media/imageshelp/chariot.png"
                alt="sun"
              ></img>
            </div>
            <div className="col-4">{props.info.temp}°C</div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            {" "}
            <li>feels like:{props.info.feels}</li>
            <li>humidity:{props.info.humidity}</li>
            <li>windspeed:{props.info.wind}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
