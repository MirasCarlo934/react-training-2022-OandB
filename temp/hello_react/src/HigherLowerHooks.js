import React, {useRef, useState} from "react";

function HigherLowerHooks() {
  const [numToGuess, setNumToGuess] = useState(Math.floor((Math.random() * 100)) + 1);
  const [hint, setHint] = useState('');
  const guess = useRef();

  function evaluateGuess() {
    if (guess.current.value < numToGuess) {
      setHint('Higher');
    } else if (guess.current.value > numToGuess) {
      setHint('Lower');
    } else {
      setHint('Correct');
    }
  }

  return(
    <div>
      <input type="number"
             id="input-number"
             ref={guess}
             placeholder="guess the number from 0 to 100"
             className="form-control"/>
      <button className="btn btn-outline-dark" onClick={evaluateGuess}>Guess</button>
      <div>{hint}</div>
    </div>
  );
}

export default HigherLowerHooks;