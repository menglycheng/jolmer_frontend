import React, { useState, useEffect } from "react";

const CountdownTimer = ({ deadline }) => {
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining(getTimeRemaining(deadline));
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [deadline]);

  const getTimeRemaining = (deadline) => {
    const totalSeconds = Math.max(0, (new Date(deadline) - new Date()) / 1000);

    const days = Math.floor(totalSeconds / (60 * 60 * 24));
    const hours = Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((totalSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return {
      days,
      hours,
      minutes,
      seconds,
    };
  };
  const [timeRemaining, setTimeRemaining] = useState(
    getTimeRemaining(deadline)
  );
  return (
    <div class="grid grid-flow-col gap-2 text-center auto-cols-max">
      <div class="flex flex-col text-xl">
        <span class="text-2xl font-semibold">{timeRemaining.days}</span>
        <span className="text-primary-lowRed font-semibold">
          {timeRemaining.days === 1 ? "day" : "days"}{" "}
        </span>
      </div>
      <div class="flex flex-col text-xl">
        <span class="text-2xl font-semibold">:</span>
        <span></span>
      </div>
      <div class="flex flex-col text-xl">
        <span class="text-2xl font-semibold">
          {timeRemaining.hours.toString().padStart(2, "0")}
        </span>
        <span className="text-primary-lowRed font-semibold">hours</span>
      </div>
      <div class="flex flex-col text-xl">
        <span class="text-2xl font-semibold">:</span>
        <span></span>
      </div>
      <div class="flex flex-col text-xl">
        <span class="text-2xl font-semibold">
          {timeRemaining.minutes.toString().padStart(2, "0")}
        </span>
        <span className="text-primary-lowRed font-semibold">min</span>
      </div>
      <div class="flex flex-col text-xl">
        <span class="text-2xl font-semibold">:</span>
        <span></span>
      </div>
      <div class="flex flex-col text-xl">
        <span class="text-2xl font-semibold">
          {timeRemaining.seconds.toString().padStart(2, "0")}
        </span>
        <span className="text-primary-lowRed font-semibold">sec</span>
      </div>
    </div>
  );
};

export default CountdownTimer;
