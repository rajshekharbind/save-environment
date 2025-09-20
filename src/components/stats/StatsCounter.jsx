// src/components/stats/StatsCounter.jsx
import React, { useEffect, useState } from "react";

export default function StatsCounter({ value, label }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500; // 1.5 sec
    const increment = value / (duration / 50);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
    //   setCount(Math.floor(start));
    // }, 50);

    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="text-center p-4">
      <h2 className="text-3xl font-bold text-green-600">{count}+</h2>
      <p className="text-gray-700">{label}</p>
    </div>
  );
}
