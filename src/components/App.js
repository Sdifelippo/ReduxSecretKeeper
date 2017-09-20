import React, { Component } from 'react';
import '../styles/App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="main">
        <div className="jumbotron bg-danger text-white">
          <h1 className="display-4">Got Secrets?</h1>
          <h6>Your Secret Keeper. Sign up! Your secrets will be stored and only you can see</h6>
          <hr/>
          <h6 className="text-muted">Create an account or login</h6>
          <Link className="btn btn-primary" to="/register" style={{marginRight:5}}>Register</Link>
          <Link className="btn btn-success" to="/login">Login</Link>
        </div>
      </div>
    );
  }
}

export default App;
