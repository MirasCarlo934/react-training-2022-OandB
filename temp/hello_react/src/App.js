import React, {Component} from 'react';
import InputSample from "./InputSample";
import StateSample from "./StateSample";
import StateCounter from "./StateCounter";
import HigherLower from "./HigherLower";
import Converter from "./Converter";
import HookSample from "./HookSample";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          {/*<StateSample/>*/}
          {/*<InputSample/>*/}
          {/*<StateCounter/>*/}
          {/*<HigherLower/>*/}
          {/*<Converter/>*/}
          <HookSample/>
        </React.Fragment>
    );
  }
}

export default App;
