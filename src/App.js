import React, { Component } from 'react';
import Signup from './pages/signup';
import Feed from './pages/feed';



class App extends Component {
  render() {
    return (
      <div className="App">

        <Signup />

        <Feed />
      </div>
    );
  }
}

export default App;
