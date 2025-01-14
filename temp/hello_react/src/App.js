import React, {Component} from 'react';
import InputSample from "./InputSample";
import StateSample from "./StateSample";
import StateCounter from "./StateCounter";
import HigherLower from "./HigherLower";
import Converter from "./Converter";
import HookSample from "./HookSample";
import StateCounterHooks from "./StateCounterHooks";
import ConverterHooks from "./ConverterHooks";
import HigherLowerHooks from "./HigherLowerHooks";
import ListSample from "./ListSample";
import TodoBasic from "./TodoBasic";
import FormSample from "./FormSample";
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";
import FormSampleSolution from "./FormSampleSolution";
import FetchSample from "./FetchSample";
import Reducer from "./Reducer";

export default class App extends Component {
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
          {/*<ConverterHooks/>*/}
          {/*<HigherLower/>*/}
          {/*<HigherLowerHooks/>*/}
          {/*<ListSample/>*/}
          <TodoBasic/>
          {/*<FormSample/>*/}

          {/*<BrowserRouter>*/}
          {/*  <h1>Exercise for 28.Sep.22</h1>*/}
          {/*  <nav className='navbar'>*/}
          {/*    <NavLink to='/fetchSample'>Fetch Sample</NavLink>*/}
          {/*    <NavLink to='/formSampleSolution'>Form Sample Solution</NavLink>*/}
          {/*    <NavLink to='/todoBasic'>Todo Basic</NavLink>*/}
          {/*  </nav>*/}
          {/*  <Routes>*/}
          {/*    <Route path="/fetchSample" element={<FetchSample/>}/>*/}
          {/*    <Route path="/formSampleSolution" element={<FormSampleSolution/>}/>*/}
          {/*    <Route path="/todoBasic" element={<TodoBasic/>}/>*/}
          {/*  </Routes>*/}
          {/*</BrowserRouter>*/}

          {/*<Reducer/>*/}
        </React.Fragment>
    );
  }
}

// export function App() {
//   return (
//     <div>
//       <h1>App</h1>
//     </div>
//   );
// }
//
// export function Home() {
//   return (
//     <div>
//       <h1>ACME consulting</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur magna sapien, sit amet gravida ex ultrices a. Sed interdum justo ac erat pulvinar mattis. Phasellus bibendum lorem lectus, id posuere neque sodales nec. Sed semper tristique sodales. Curabitur neque purus, vestibulum non imperdiet eget, cursus sit amet turpis. Aliquam at placerat libero. Quisque et porttitor velit. Morbi posuere fermentum molestie. Aliquam efficitur nibh eget ipsum egestas porta. Curabitur sem massa, fermentum nec purus et, maximus lacinia velit. Integer at ipsum pulvinar, placerat nisl quis, finibus justo. Nulla at blandit risus, id sodales sapien. Proin rutrum eu risus vitae varius. In sit amet nulla eget mi pharetra commodo a at purus.</p>
//     </div>
//   )
// }
//
// export function About() {
//   return (
//     <div>
//       <h1>About ACME</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur magna sapien, sit amet gravida ex ultrices a. Sed interdum justo ac erat pulvinar mattis. Phasellus bibendum lorem lectus, id posuere neque sodales nec. Sed semper tristique sodales. Curabitur neque purus, vestibulum non imperdiet eget, cursus sit amet turpis. Aliquam at placerat libero. Quisque et porttitor velit. Morbi posuere fermentum molestie. Aliquam efficitur nibh eget ipsum egestas porta. Curabitur sem massa, fermentum nec purus et, maximus lacinia velit. Integer at ipsum pulvinar, placerat nisl quis, finibus justo. Nulla at blandit risus, id sodales sapien. Proin rutrum eu risus vitae varius. In sit amet nulla eget mi pharetra commodo a at purus.</p>
//     </div>
//   )
// }
//
// export function Contact() {
//   return (
//     <div>
//       <h1>Contact us</h1>
//       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam efficitur magna sapien, sit amet gravida ex ultrices a. Sed interdum justo ac erat pulvinar mattis. Phasellus bibendum lorem lectus, id posuere neque sodales nec. Sed semper tristique sodales. Curabitur neque purus, vestibulum non imperdiet eget, cursus sit amet turpis. Aliquam at placerat libero. Quisque et porttitor velit. Morbi posuere fermentum molestie. Aliquam efficitur nibh eget ipsum egestas porta. Curabitur sem massa, fermentum nec purus et, maximus lacinia velit. Integer at ipsum pulvinar, placerat nisl quis, finibus justo. Nulla at blandit risus, id sodales sapien. Proin rutrum eu risus vitae varius. In sit amet nulla eget mi pharetra commodo a at purus.</p>
//     </div>
//   )
// }

// export default App;
