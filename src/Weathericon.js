import React from "react";
import sun from "./media/clearskyday.png";
import moon from "./media/clearskynight.png";
import cloud from "./media/cloud.png";
import clouds from "./media/clouds.png";
import shower from "./media/shower.png";
import fewcloudsd from "./media/fewcloudsday.png";
import fewcloudsn from "./media/fewcloudsnight.png";
import fog from "./media/fog.png";
import rain from "./media/rain.png";
import snow from "./media/snow.png";
import storm from "./media/storm.png";

export default function WeatherIcon(props) {
  console.log(props.icon);
  const codeMapping = {
    "clear-sky-day": sun,
    "clear-sky-night": moon,
    "few-clouds-day": fewcloudsd,
    "few-clouds-night": fewcloudsn,
    "scattered-clouds-day": cloud,
    "scattered-clouds-night": cloud,
    "broken-clouds-day": clouds,
    "broken-clouds-night": clouds,
    "shower-rain-day": shower,
    "shower-rain-night": shower,
    "rain-day": rain,
    "rain-night": rain,
    "thunderstorm-day": storm,
    "thunderstorm-night": storm,
    "snow-day": snow,
    "snow-night": snow,
    "mist-day": fog,
    "mist-night": fog,
  };

  const weatherImage = codeMapping[props.icon];

  return (
    <div>
      <img src={weatherImage} alt="Weather Icon" />{" "}
    </div>
  );
}
