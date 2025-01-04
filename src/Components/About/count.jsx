import React, { useState, useEffect } from 'react';

const Counter = ({ endValue }) => {
  const [count, setCount] = useState(0);
  const speed = 200;

  useEffect(() => {
    const end = parseInt(endValue, 10);
    if (count === end) return;

    const incrementTime = (end / speed) * 1; 

    const timer = setInterval(() => {
      setCount(prevCount => {
        const nextCount = Math.ceil(prevCount + incrementTime);
        if (nextCount >= end) {
          clearInterval(timer);
          return end;
        }
        return nextCount;
      });
    }, 80);

    return () => clearInterval(timer);
  }, [endValue, count]);

  return (
    <span>{count}</span>
  );
};

export default Counter;
