import React from 'react';
// import MapDisplay from './MapDisplay.js'
// import Login from './Login.js'
// import Saved from './Saved.js'
import Display from './Display.js'
import './App.css';

export default function App() {
  return (
    <div className="app">
      <h1>Sunrise-Sunset</h1>
      {/* <Login /> */}
      <Display />
      {/* <Saved />
      <MapDisplay /> */}

    </div>
  );
}