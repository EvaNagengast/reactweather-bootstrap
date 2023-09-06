import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-6">
            {" "}
            <h1>New York</h1>
          </div>
          <div className="col-4">
            <input
              type="text"
              placeholder="Enter a city"
              className="searchinput w-100"
              autoFocus="on"
            ></input>
          </div>
          <div className="col-2">
            <input type="submit" className="searchbutton"></input>
          </div>
        </div>
      </form>

      <ul>
        <li>Monday, 5.9., 19:00</li>
        <li>Mostly cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="row">
            <div className="col-6">
              <img
                src="https://transcendent-dodol-313db9.netlify.app/media/imageshelp/chariot.png"
                alt="sun"
              ></img>
            </div>
            <div className="col-6"></div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>rain</li>
            <li>wind</li>
            <li>humidity</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
