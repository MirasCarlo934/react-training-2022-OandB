import {Component} from "react";

class InputSample extends Component {

  constructor(props) {
    super(props);
    this.one = 0;
    this.two = 0;
  }

  getValue = (event) => {
    if (event.target.id === "one")  {
      this.one = event.target.value;
    } else if (event.target.id === "two") {
      this.two = event.target.value;
    }
  }

  computeGcfThenLogToConsole = () => {
    let x = this.one;
    let y = this.two;
    while(y) {
      let t = y;
      y = x % y;
      x = t;
    }
    console.log(`GCF: ${x}`);
  }

  render() {
    return(
      <div>
        <input type="number" id="one" onChange={this.getValue} className="form-control"/>
        <input type="number" id="two" onChange={this.getValue} className="form-control"/>
        <button onClick={this.computeGcfThenLogToConsole} className="btn btn-outline-dark">Get GCF</button>
      </div>
    );
  }
}

export default InputSample;