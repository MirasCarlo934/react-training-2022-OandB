import {Component} from "react";

class InputSample extends Component {

  constructor(props) {
    super(props);
    this.someName = "";
  }

  getValue = (event) => {
    this.someName = event.target.value;
  }

  clickHandler = (event) => {
    console.log(this.someName);
  }

  render() {
    return(
      <div>
        <input type="text" onChange={this.getValue}/>
        <button onClick={this.clickHandler}> Click</button>
      </div>
    );
  }
}

export default InputSample;