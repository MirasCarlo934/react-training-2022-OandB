import React, {useState} from "react";

function StateCounterHooks() {
  const INCREMENT = 3;
  const DECREMENT = -2;
  const MAX_COUNT = 50;
  const MIN_COUNT = -10;

  const [count, setCount] = useState(0);

  function increaseCount() {
    setCount(function() {
      if (count + INCREMENT <= MAX_COUNT) {
        return count + INCREMENT;
      } else {
        console.warn(`Count cannot be greater than ${MAX_COUNT}`);
        return count;
      }
    });
  }

  function decreaseCount() {
    setCount(function() {
      if (count + DECREMENT >= MIN_COUNT) {
        return count + DECREMENT;
      } else {
        console.warn(`Count cannot be less than ${MIN_COUNT}`);
        return count;
      }
    });
  }

  return (
    <React.Fragment>
      <div>COUNTER: {count}</div>
      <button onClick={decreaseCount}>-</button>
      <button onClick={increaseCount}>+</button>
    </React.Fragment>
  );
}

export default StateCounterHooks;