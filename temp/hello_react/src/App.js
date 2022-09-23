// import logo from './logo.svg';
import React from 'react';
import './App.css';
import Header from "./header";
import Subheader from "./subheader";
import UnsortedList from "./unsorted-list";

function App() {
    let tasklist = ["1", "2", "3"];
  return (
      <React.Fragment>
        <Header/>
        <Subheader name="Jane"/>
        <UnsortedList listedStrings={tasklist}/>
      </React.Fragment>
  );
}

export default App;
