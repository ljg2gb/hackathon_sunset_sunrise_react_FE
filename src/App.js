import React, { Component } from 'react';
// import MapDisplay from './MapDisplay.js'
import Login from './Login.js'
// import Saved from './Saved.js'
import Display from './Display.js'
import './App.css';

export default class App extends Component {
  state = {
    isLoggedIn: false
  }

  toggleLogin = (result) => {
    if (result.username) {
      this.setState({
        isLoggedIn: true
      })
    }
  }

  render() {
    return (
      <div className="app">
        <h1>Rise and Shine</h1>
        {this.state.isLoggedIn ? <Display /> : <Login toggleLogin={this.toggleLogin}/>}
        {/* <Saved />
        <MapDisplay /> */}

      </div>
    );
  }
}