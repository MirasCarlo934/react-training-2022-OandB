import React, {Component} from "react";

class StateCounter extends Component {

  constructor(props) {
    super(props);
    this.state = {count: 0};
    StateCounter.UPPER_LIMIT = 50;
    StateCounter.LOWER_LIMIT = -10;
    StateCounter.INCREMENT = 3;
    StateCounter.DECREMENT = -2;
  }

  countUp = () => {
    let currCount = this.state.count;
    if (currCount + StateCounter.INCREMENT <= StateCounter.UPPER_LIMIT) {
      this.setState({count: this.state.count + 3});
    } else {
      console.warn("Count cannot be greater than 50");
    }
  }

  countDown = () => {
    let currCount = this.state.count;
    if (currCount + StateCounter.DECREMENT >= StateCounter.LOWER_LIMIT) {
      this.setState({count: this.state.count - 2});
    } else {
      console.warn("Count cannot be less than -10");
    }
  }

  render() {
    return(
      <React.Fragment>
        <button onClick={this.countUp}>+</button>
        <button onClick={this.countDown}>-</button>
        <div>COUNT : {this.state.count}</div>
      </React.Fragment>
    );
  }
}

export default StateCounter;