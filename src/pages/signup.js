import React, { Component } from 'react';
import Header from '../components/header/header'

class Signup extends Component {
  render() {
    return (
      <div className="signup">
        < Header />
        <input type="email"></input>

      </div>
    );
  }
}

export default Signup;