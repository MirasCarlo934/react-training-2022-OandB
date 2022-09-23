import React, {Component} from "react";

class Subheader extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    console.log(this.props);
    return (
      <h2>{this.props.name}'s GTD for today</h2>
    );
  }
}

export default Subheader;