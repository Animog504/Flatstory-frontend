import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavigationBar from './NavigationBar'
import ContentContainer from './ContentContainer'

import flatStoryIcon from './assets/FlatStory_ICON.png';

import Home from './Home.js'
import About from './About.js'
import Play from './Play.js'

class App extends Component {
  constructor(){
    super()

    this.state = {
      currentTab: 'home',
      isLoaded: false,
      currentPlayer: null,
    }
  }

  setCurrentTab = (tab) => {
    if(!!tab && tab != this.state.currentTab){
      console.log("setting state");
      this.setState({
        currentTab: tab
      })
    }
  }


  render() {
    const style = {
      padding: "20px",
    }
    console.log("rendering!!!!!!");
    return (
      <div className="App">
        <div className="mask pattern-5 flex-center" align="center" style={style}>
          <img src={flatStoryIcon} />
        </div>

        <div className="container">
          <Router>
              <div>
                <NavigationBar setCurrentTab={this.setCurrentTab} />
                  <ContentContainer>
                    <Switch>
                      <Route exact path="/about" render={About} />
                      <Route exact path="/play" render={Play} />
                      <Route exact path="/" render={Home} />
                    </Switch>
                  </ContentContainer>
              </div>
          </Router>
        </div>



      </div>
    );
  }
}

export default App;
