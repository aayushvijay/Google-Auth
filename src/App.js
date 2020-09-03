import React, { Component } from "react";
import "./App.css";
import GoogleBtn from './GoogleBtn';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Google Authentication</h1>
        <h3>To Authenticate, Please Log in!</h3>
        <GoogleBtn />
      </div>
    );
  }
}

export default App;
