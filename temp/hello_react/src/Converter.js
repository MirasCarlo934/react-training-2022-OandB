import React, {Component} from "react";

class Converter extends Component {

  CM_IN_ONE_INCH = 2.54;

  constructor(props) {
    super(props);
    this.state = {
      cm: "",
      inches: ""
    }
  }

  convertCmToInches = (event) => {
    let cm = event.target.value;
    this.setState({
      cm: cm,
      inches: cm / this.CM_IN_ONE_INCH
    });
  }

  convertInchesToCm = (event) => {
    let inches = event.target.value;
    this.setState({
      cm: inches * this.CM_IN_ONE_INCH,
      inches: inches
    });
  }

  render() {
    return(
      <div>
        <input type="number" placeholder="centimeters" id="cm" onChange={this.convertCmToInches} className="form-control" value={this.state.cm}/>
        <input type="number" placeholder="inches" id="inches" onChange={this.convertInchesToCm} className="form-control" value={this.state.inches}/>
      </div>
    );
  }
}

export default Converter;