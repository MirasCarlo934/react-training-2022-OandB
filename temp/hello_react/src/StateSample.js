import React, {Component} from "react";

class StateSample extends Component {

  constructor() {
    super();
    this.state = {
      name: "John Doe",
      employeeStatus: "employed"
    };
    console.log(this.state);
  }

  handleClick = () => {
    this.setState({name: "James Smith"});
    console.log(this.state);
  }

  render() {
    return(
      <React.Fragment>
        <button onClick={this.handleClick}>
          Click me
        </button>
        <div>
          {this.state.name}
        </div>
      </React.Fragment>
    );
  }
}

export default StateSample;