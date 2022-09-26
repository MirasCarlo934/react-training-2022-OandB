import React, {useRef, useState} from "react";

function HigherLowerHooks() {
  const numToGuess = Math.floor((Math.random() * 100)) + 1;
  const hint = useRef('');
  const guess = useRef(0);

  function evaluateGuess() {
    hint.current.value = () => {
      if (guess < numToGuess) {
        return 'Higher'
      } else if (guess > numToGuess) {
        return 'Lower'
      } else {
        return 'Correct'
      }
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
      <div ref={hint}/>
    </div>
  );
}

export default HigherLowerHooks;