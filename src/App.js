import React, { Component } from 'react';

import FeedPage from "./pages/FeedPage";
import SignUpPage from "./pages/SignUpPage";

import { connect } from "react-redux";

class App extends Component {

  render() {
    return (
      <div className="App" >
        {this.props.token ? <FeedPage token={this.props.token}/> : <SignUpPage />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.user.token }
}

export default connect(mapStateToProps)(App);