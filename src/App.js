import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {ZYtoolbar} from './componments/ZYtoolbar';
import MyAwesomeReactComponent from './componments/MyAwesomeReactComponent';
class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            color: 'black',
        }
    }
  render() {
    return (
      <div className="App">
        <div className="App-header">
            <ZYtoolbar/>
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

              <MyAwesomeReactComponent />

      </div>


    );
  }
}


export default App;
