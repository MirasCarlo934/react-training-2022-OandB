import React, {useState} from "react";

function HookSample() {
  const [count, setCount] = useState(0);

  return (
    <React.Fragment>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </React.Fragment>
  )
}

export default HookSample;