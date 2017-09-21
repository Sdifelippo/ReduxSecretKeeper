import React, { Component } from 'react';
// import '../styles/App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="jumbotron bg-danger text-white">
          <h1 className="display-4">Got Secrets?</h1>
          <h2>Store them here.....This is your Secret Keeper. Sign up!</h2>
          <h2> Your secrets will be stored and only you can see</h2>
          <hr/>
          <h1 className="text">Create an account or login</h1>
          <Link className="btn btn-primary" to="/register" style={{marginRight:5}}>Register</Link>
          <Link className="btn btn-success" to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default App;
