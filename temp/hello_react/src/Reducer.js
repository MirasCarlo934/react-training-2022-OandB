import {useReducer} from "react";

function Reducer() {
  function reducer(number, newNumber) {
    return number + newNumber;
  }

  const[num, setNum] = useReducer(reducer, 0);

  return (
    <div>
      <h1 onClick={() => setNum(1)}>{num}</h1>
    </div>
  )
}

export default Reducer;