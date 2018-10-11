import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import NavbarFeatures from './NavbarFeatures'
import GameContainer from './GameContainer'

import flatStoryIcon from './Assets/FlatStory_ICON.png';

class App extends Component {
  render() {
    const style = {
      padding: "20px",
    }
    return (
      <div className="App">
        <div className="container">
          <div align="center" style={style}>
            <img src={flatStoryIcon} />
          </div>
          <NavbarFeatures />
          <GameContainer />

        </div>
      </div>
    );
  }
}

export default App;
