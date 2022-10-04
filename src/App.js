//import logo from './levvel-logo.svg';
//import { toHaveDisplayValue } from '@testing-library/jest-dom/dist/matchers';
import React from 'react';
import './App.css';
// import { BrowserRouter as Router, 
//   Route, Switch } from "react-router-dom";
//mport authorspage from './authorspage';
//import PostList from './components/PostList'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false
    };
  }
  // ComponentDidMount is used to
    // execute the code 
    componentDidMount() {
        fetch(
"https://633c6ef0f11701a65f7621ad.mockapi.io/api/posts")
            .then((res) => res.json())
            .then((json) => {
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

  render(){
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded) return <div>
        <h1> Pleses wait some time.... </h1> </div> ;

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
      <div className="blogHolder"><h2>Check out Top Posts from our Authors!</h2>
      
      </div>
     
      <div className="apiHolder">{
                items.map((item) => ( 
                <ol key = { item.id } >
                  
                    <div className="userName">{ item.name } </div>
                    <div className="userContainer"><h3 className="titleName">{ item.title}</h3>
                     { item.body } </div>
                    </ol>
                ))
            }
      </div>
      {/* <PostList postlist={postList} /> */}
    </div>
  );
}
}
  
export default App;
