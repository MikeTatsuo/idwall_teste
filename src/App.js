import React, { Component } from 'react';
import FeedPage from "./pages/FeedPage";
import SignUpPage from "./pages/SignUpPage";
import { connect } from "react-redux";
import M from 'materialize-css';

class App extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      M.AutoInit();
    });
  }

  render() {
    return (
      <div className="App bg-white container" >
        {this.props.token ? <FeedPage /> : <SignUpPage />}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.user.token }
}
export default connect(mapStateToProps)(App);