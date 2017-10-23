import React, { Component } from 'react';
import './App.css';
import { db } from './fire';
import StreamActive from './StreamActive';
const keyPressRef = db.ref('keys')

class App extends Component {

  sendKey = (keyPressed) => {
    console.log('keyPressed', keyPressed.target.name)

    const key = keyPressed.target.name
    const newKeyRef = keyPressRef.push().key
    console.log(newKeyRef)

    db.ref('keys/' + newKeyRef).set({
      key: key,
      id: newKeyRef
    })
    .then(() => {console.log('added key')})
    .catch((err) => {console.log('err', err)})
  }

  render() {
    return (
      <div className="App">
        <StreamActive/>
      <header>
        <h1>
          Press a Key
        </h1>
      </header>
      <main>
        <div className="control-container">
          <div className="control-left">
            <div className="control-left-top">
              <button className="direction-button" type="button" onClick={this.sendKey} name="up">UP</button>
            </div>
            <div className="control-left-middle">
              <button className="direction-button" type="button" onClick={this.sendKey} name="left">LEFT</button>
              <button className="direction-button" type="button" onClick={this.sendKey} name="right">RIGHT</button>
            </div>
            <div className="control-left-bottom">
              <button className="direction-button" type="button" onClick={this.sendKey} name="down">DOWN</button>
            </div>
          </div>
          <div className="control-right">
            <div className="control-right-top">
              <button className="control-button y" type="button" onClick={this.sendKey} name="y">Y</button>
              <button className="control-button x" type="button" onClick={this.sendKey} name="x">X</button>
            </div>
            <div className="control-right-bottom">
              <button className="control-button b" type="button" onClick={this.sendKey} name="b">B</button>
              <button className="control-button a" type="button" onClick={this.sendKey} name="a">A</button>
            </div>
          </div>
        </div>
      </main>
      </div>
    )
  }
}

export default App;
