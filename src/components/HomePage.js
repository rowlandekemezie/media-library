import React from 'react';
import {Link} from 'react-router';
// import logo from '../logo.svg';

const HomePage = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src="" className="App-logo" alt="logo"/>
        <h2>Welcome to Imaggy</h2>
      </div>
      <p className="App-intro">
        To get started, <Link to="images">
        <button className="btn btn-primary"> click</button>
      </Link>
      </p>
    </div>
  );
};

export default HomePage;
