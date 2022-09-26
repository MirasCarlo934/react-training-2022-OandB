import React, {useRef, useState} from "react";

function Converter() {
  const CM_IN_ONE_INCH = 2.54;

  const txtCm = useRef(); // not recommended!!! just for exercise. use controlled forms instead (useState)
  const txtInches = useRef();

  function convertCmToInches(event) {
    const tempCm = event.target.value;
    const mInches = tempCm / CM_IN_ONE_INCH;
    console.log(mInches);
    txtInches.current.value = mInches;
  }

  function convertInchesToCm(event) {
    const tempInches = event.target.value;
    const mCm = tempInches * CM_IN_ONE_INCH;
    console.log(mCm);
    txtCm.current.value = mCm;
  }

  return (
    <div>
      <input type="number"
             id="cm"
             ref={txtCm}
             placeholder="centimeters"
             onChange={convertCmToInches}
             className="form-control"
      />
      <input type="number"
             id="inches"
             ref={txtInches}
             placeholder="inches"
             onChange={convertInchesToCm}
             className="form-control"
      />
    </div>
  );
}

export default Converter;