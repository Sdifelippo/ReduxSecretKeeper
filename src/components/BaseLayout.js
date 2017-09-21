import React from 'react';
import logo from '../logo.svg';
// import '../styles/App.css';
import { NavLink } from 'react-router-dom';

function BaseLayout ({children}) {
  return (
    <div className="col-md-6 offset-md-3">
      <nav className="navbar " >
        <div className="navbar-nav ">
          <img src={logo} className="App-logo" alt="logo" style={{width:"10%", height:"10%"}}/>
          <NavLink to="/" className="nav-item nav-link" style={{color:"white"}}>SecretKeeper</NavLink>
          <NavLink to="/" className="nav-item nav-link">Home</NavLink>
          <NavLink to="/register" className="nav-item nav-link">Register</NavLink>
          <NavLink to="/login" className="nav-item nav-link">Log In</NavLink>
          <button className="btn btn">Log Out</button>
        </div>
      </nav>
      {children}
    </div>
  );
}

export default BaseLayout;
