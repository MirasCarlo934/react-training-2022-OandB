import React, {Component} from 'react';
import InputSample from "./InputSample";
import StateSample from "./StateSample";
import StateCounter from "./StateCounter";
import HigherLower from "./HigherLower";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          {/*<StateSample/>*/}
          {/*<InputSample/>*/}
          {/*<StateCounter/>*/}
          <HigherLower/>
        </React.Fragment>
    );
  }
}

export default App;
