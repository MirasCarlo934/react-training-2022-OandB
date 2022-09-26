import React, {Component} from 'react';
import InputSample from "./InputSample";
import StateSample from "./StateSample";
import StateCounter from "./StateCounter";
import HigherLower from "./HigherLower";
import Converter from "./Converter";
import HookSample from "./HookSample";
import StateCounterHooks from "./StateCounterHooks";
import ConverterHooks from "./ConverterHooks";

class App extends Component {
  render() {
    return (
        <React.Fragment>
          {/*<StateSample/>*/}
          {/*<InputSample/>*/}
          {/*<StateCounter/>*/}
          {/*<HigherLower/>*/}
          {/*<Converter/>*/}
          {/*<HookSample/>*/}
          {/*<StateCounterHooks/>*/}
          <ConverterHooks/>
        </React.Fragment>
    );
  }
}

export default App;
