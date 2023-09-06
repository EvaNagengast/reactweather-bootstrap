import React from "react";

export default function Dateinfo() {
let currentDate= new Date()
  let today = currentDate.getDate();
  let displayday = `${today}, `;

  console.log(displayday);

  return (
    <div>
      <p>Current Day of the Month:</p>
      <p>{displayday}</p>
    </div>
  );
}
