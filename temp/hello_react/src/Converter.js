import React, {Component} from "react";

class Converter extends Component {



  render() {
    return(
      <div>
        <input type="number" placeholder="centimeters" id="cm" onChange={this.getValue} className="form-control"/>
        <input type="number" placeholder="inches" id="inches" onChange={this.getValue} className="form-control"/>
        <button className="btn btn-outline-dark">Get GCF</button>
      </div>
    );
  }
}

export default Converter;