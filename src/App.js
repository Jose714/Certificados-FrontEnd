import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HomeNavBar from "./Components/home.js";

class App extends Component {
  render() {
    return (
      <HomeNavBar />
    );
  }
}

export default App;