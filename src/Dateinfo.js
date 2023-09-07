import React from "react";

export default function Dateinfo() {
  let currentDate = new Date();
  let todayweekday = currentDate.getDay();
  let todaydate = currentDate.getDate();
  let todaymonth = currentDate.getMonth();
  let todayyear = currentDate.getFullYear();
  let todayshort = todayyear - 2000;
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
  let displayday = dayname[todayweekday];
  let displaymonth = monthname[todaymonth];
  return (
    <div>
      <p>
        {displayday}, {todaydate}.{displaymonth}, `{todayshort}
      </p>
    </div>
  );
}
