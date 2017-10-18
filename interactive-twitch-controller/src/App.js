import React, { Component } from 'react';
import './App.css';
import { db } from './fire';

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="online-status">
        <h2 className="status-text"></h2>
      </div>
      <header>
        <h1>
          Press a Key
        </h1>
      </header>
      <main>
        <div className="control-container">
          <div className="control-left">
            <div className="control-left-top">
              <button className="direction-button" type="button" name="up">UP</button>
            </div>
            <div className="control-left-middle">
              <button className="direction-button" type="button" name="left">LEFT</button>
              <button className="direction-button" type="button" name="right">RIGHT</button>
            </div>
            <div className="control-left-bottom">
              <button className="direction-button" type="button" name="down">DOWN</button>
            </div>
          </div>
          <div className="control-right">
            <div className="control-right-top">
              <button className="control-button y" type="button" name="y">Y</button>
              <button className="control-button x" type="button" name="x">X</button>
            </div>
            <div className="control-right-bottom">
              <button className="control-button b" type="button" name="b">B</button>
              <button className="control-button a" type="button" name="a">A</button>
            </div>
          </div>
        </div>
      </main>
      </div>
    )
  }
}

export default App;
