import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavbarFeatures from './NavbarFeatures'
import GameContainer from './GameContainer'

import flatStoryIcon from './Assets/FlatStory_ICON.png';

import Home from './Home.js'
import About from './About.js'
import Play from './Play.js'

class App extends Component {
  render() {
    const style = {
      padding: "20px",
    }
    return (
      <div className="App">
        <div class="mask pattern-5 flex-center" align="center" style={style}>
          <img src={flatStoryIcon} />
        </div>
        <div className="container">
              <NavbarFeatures />
              <GameContainer />
        </div>
      </div>
    );
  }
}

export default App;
