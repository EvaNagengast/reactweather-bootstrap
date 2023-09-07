import React from "react";

export default function Dateinfo(props) {
  const dayname = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const monthname = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];




  let currentTime = new Date(props.time * 1000);
let currentWeekday = dayname[currentTime.getDay()];
let currentDateDay = currentTime.getDate();
let currentDateMonth = monthname[currentTime.getMonth()];
let currentDateYear = currentTime.getFullYear()-2000;



  return (
    <div>
      <p>
        {currentWeekday}, {currentDateDay}.{currentDateMonth}, `
        {currentDateYear}
      </p>
    </div>
  );
}

