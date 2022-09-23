import React, {Component} from "react";

class HigherLower extends Component {

  constructor(props) {
    super(props);
    this.state = {
      numToGuess: Math.floor((Math.random() * 100)),
      guess: -1,
      hint: ""
    };
  }

  storeValue = (event) => {
    this.setState({guess: event.target.value})
  }

  evaluateGuess = (event) => {
    if (this.state.guess < this.state.numToGuess) {
      this.setState({hint: "Higher"});
    } else if (this.state.guess > this.state.numToGuess) {
      this.setState({hint: "Lower"});
    } else {
      this.setState({hint: "Correct"});
    }
  }

  render() {
    return(
      <div>
        <input type="number" placeholder="guess the number from 0 to 100" id="input-number" onChange={this.storeValue} className="form-control"/>
        <button className="btn btn-outline-dark" onClick={this.evaluateGuess}>Guess</button>
        <div>{this.state.hint}</div>
      </div>
    );
  }
}

export default HigherLower;