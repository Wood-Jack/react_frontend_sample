//import logo from './levvel-logo.svg';
//import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './App.css';
//import { Link } from "react-router-dom"
//import PostList from './components/PostList'

const authorsPage = () => {
    return (
        <div className="App">
      
        <header className="top">
          {/* <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>  */}
  
          <h1 className="topHeader">Wood's Food Blog</h1>
        </header>
        {/* <Link to="/">authorsPage</Link> */}
        <div>Authors name</div>
        <div className="blogHolder"><h2>Check out Top Posts from our Authors!</h2>
        </div>
        
    </div>
    );
  };
    
  export default authorsPage;
  