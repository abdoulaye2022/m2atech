"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface CountdownProps {
  endDate: string; // Format: "Month Day, Year HH:mm:ss"
}

const Countdown: React.FC<CountdownProps> = ({ endDate }) => {
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
    <>
      <div
        className="coming-soon-area"
        style={{ backgroundImage: `url(/img/coming-soon-bg.jpg)` }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="coming-soon-content">
              <Link href="/" className="logo">
                <Image
                  src="/img/logo.png"
                  alt="image"
                  width={130}
                  height={54}
                />
              </Link>
              <h2>We Are Launching Soon</h2>

              <div
                id="timer"
                className="flex-wrap d-flex justify-content-center"
              >
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

              <form className="newsletter-form">
                <div className="form-group">
                  <input
                    type="email"
                    className="input-newsletter"
                    placeholder="Enter your email"
                    name="email"
                    required
                  />
                  <span className="label-title">
                    <i className="bx bx-envelope"></i>
                  </span>
                </div>

                <button type="submit" className="default-btn">
                  <i className="flaticon-user"></i>
                  Subscribe <span></span>
                </button>

                <p>
                  If you would like to be notified when your app is live, Please
                  subscribe to our mailing list.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Countdown;
