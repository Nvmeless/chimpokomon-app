import React, { useEffect, useState } from "react";

const Clock = () => {
  const [hours, setHours] = useState(new Date().getSeconds());
  const [count, setCount] = useState(0);

  const changeHour = (h) => {
    setHours(h);

    setCount(hours);
  };
  //   setTimeout(() => {
  //     setHours(new Date().getSeconds());
  //     setCount(count + 1);
  //     console.log("Log", hours, count);
  //   }, 1000);
  useEffect(() => {
    const intervale = setInterval(() => {
      setHours(new Date().getSeconds());
      setCount(count + 1);
      console.log("Log", hours, count);
    }, 1000);

    console.log("componentDidMount");

    return () => {
      console.log("componentWillUnmount");
      clearInterval(intervale);
    };
  }, []);

  useEffect(() => {
    console.log("Count a été modifié pour", count);
  }, [count]);
  useEffect(() => {
    setCount(hours);
  }, [hours]);
  return <div>{hours}</div>;
};

export default Clock;
