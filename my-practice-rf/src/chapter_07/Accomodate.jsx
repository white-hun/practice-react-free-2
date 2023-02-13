import React, { useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10;

function Accomodate(props) {
  const [isFull, setIsFull] = useState(false);
  const [count, increaseCount, decreaseCount] = useCounter(0);

  useEffect(() => {
    console.log("=====================");
    console.log("useEffect() is called");
    console.log(`isFull: ${isFull}`);
  });

  useEffect(() => {
    setIsFull(count >= MAX_CAPACITY);
    console.log(`Current count value: ${count}`);
  }, [count]);

  return (
    <div style={{ padding: 16 }}>
      <p>{`Total ${count}`}</p>

      <button onClick={increaseCount} disabled={isFull}>
        Enter
      </button>
      <button onClick={decreaseCount}>Exit</button>

      {isFull && <p style={{ color: "red" }}>Full</p>}
    </div>
  );
}

export default Accomodate;
