import React from 'react';
import './App.css';


function authorsPage(props) {
    return (
        <div className="App">
      
        <header className="top">
          <h1 className="topHeader">Levvel's Food Blog</h1>
        </header>
        <div>{props.name} name</div>
        <div className="blogHolder"><h2>Check out Top Posts from our Authors!</h2>
        
        </div>
        <div className="userContainer"><h3 className="titleName">{ props.title}</h3>
                     { props.body } </div>
    </div>
    );
  };
    
  export default authorsPage;
  