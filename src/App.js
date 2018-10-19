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

  handleFormLogin = (name, password) => {
    //login stuff
    console.log("Sending fetch with info:", name, password)
    fetch('http://localhost:3000/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: name,
          password: password,
        }
      })
    })
    .then(r => r.json())
    .then(r => {console.log(r); this.setState({
      currentPlayer: r.user,
    })})
  }
  handleFormRegister = (name, email, password) => {
    fetch('http://localhost:3000/api/v1/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        user: {
          username: name,
          email: email,
          password: password,
          score: 0,
        }
      })
    })
    .then(r => r.json())
    .then(r => {console.log(r); this.setState({
      currentPlayer: r.user,
    })})

  }

  handleLogOut = () => {
    this.setState({
      currentPlayer: null
    })
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
                <NavigationBar currentPlayer={this.state.currentPlayer} setCurrentTab={this.setCurrentTab} handleFormLogin={this.handleFormLogin} handleFormRegister={this.handleFormRegister} handleLogOut={this.handleLogOut}/>
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
