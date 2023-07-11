import React, { useState, useEffect } from "react";

const Clock = () => {
  const [time, setTime] = useState("");
  
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const month = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDateTime = new Date();
      const currentHours = currentDateTime.getHours();
      const hours = currentHours % 12 || 12;
      const amPm = currentHours >= 12 ? "PM" : "AM";
      const currentMinutes = currentDateTime.getMinutes();
      const formattedTime = `${weekday[currentDateTime.getDay()]} ${
        currentDateTime.getDate()
      } ${month[currentDateTime.getMonth()]} ${hours}:${currentMinutes} ${amPm}`;

      setTime(formattedTime);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>{time}</div>;
};

export default Clock;
