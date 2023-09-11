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
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  let currentTime = new Date(props.time * 1000);
  let currentWeekday = dayname[currentTime.getDay()];
  let currentDateDay = currentTime.getDate();
  let currentDateMonth = monthname[currentTime.getMonth()];
  let currentDateYear = currentTime.getFullYear() - 2000;

  return (
    <li>
      {currentWeekday}, {currentDateDay}. {currentDateMonth}, `{currentDateYear}
    </li>
  );
}
