import React, { Component } from 'react';
import UserContext from './_context/UserContext';
import Nav from './components/Nav';
import Body from './components/Body';
import './App.css';

class App extends Component {

  state = {
    user: {
      avatar: "",
      name: "test",
      followers: 1234,
      following: 123
    }
  };

  render() {
    return (
      <div className="App">
        <p>React Conext API Example</p>
        <UserContext.Provider value={this.state.user}>
          <Nav />
          <Body />
        </UserContext.Provider>        
      </div>
    );
  }
}

export default App;
