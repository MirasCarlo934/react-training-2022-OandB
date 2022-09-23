import React, {Component} from "react";

class EventSample extends Component {

  constructor() {
    super();
    this.counter = 0;
  }

  handleClick = (event) => {
    console.log(this.counter++);
  }

  render() {
    return(
      <React.Fragment>
        <button className="btn btn-outline-dark" onClick={this.handleClick}>Click Me</button>
      </React.Fragment>
    )
  }
}

export default EventSample;