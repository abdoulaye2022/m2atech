"use client";

import React, { useState, useEffect } from "react";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const UpcomingEventTimer: React.FC<CountdownProps> = ({ endDate }) => {
  const calculateTimeLeft = () => {
    const endDateTime = new Date("August 23, 2025 17:00:00 PDT").getTime();
    const now = new Date().getTime();
    const timeRemaining = endDateTime - now;

    if (timeRemaining > 0) {
      const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      setCountdown({ days, hours, minutes, seconds });
    } else {
      setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
    }
  };

  const [countdown, setCountdown] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      calculateTimeLeft();
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <div id="timer" className="flex-wrap d-flex justify-content-center">
      <div
        id="days"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {countdown.days} <span>Days</span>
      </div>
      <div
        id="hours"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {countdown.hours} <span>Hours</span>
      </div>
      <div
        id="minutes"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {countdown.minutes} <span>Minutes</span>
      </div>
      <div
        id="seconds"
        className="align-items-center flex-column d-flex justify-content-center"
      >
        {countdown.seconds} <span>Seconds</span>
      </div>
    </div>
  );
};

export default UpcomingEventTimer;
