import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {About, App, Contact} from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, NavLink, Route, Routes} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
root.render(
  <div className="MyApp">
    <BrowserRouter>
      <h1>Home Page</h1>

      <nav className="navbar">
        <NavLink to="/">home</NavLink>
        <NavLink to="/about">about us</NavLink>
        <NavLink to="/contact">contact us</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </BrowserRouter>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
