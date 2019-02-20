import React, { Component } from 'react';
import FeedPage from "./pages/FeedPage";
import SignUpPage from "./pages/SignUpPage";
import { connect } from "react-redux";
import M from 'materialize-css';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

class App extends Component {
  componentDidMount() {
    document.addEventListener('DOMContentLoaded', function () {
      M.AutoInit();
    });
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App bg-white container" >
          <Route render={(props) => this.props.token ?
            props.location.pathname === "/signup" ? 
              <Redirect to="/feed" /> :
              null :
            props.location.pathname !== "/signup" ?
              <Redirect to="/signup" /> :
              null
               } />                
          <Route path="/signup" component={SignUpPage} />
          <Route path="/feed" component={FeedPage} />
        </div>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { token: state.user.token }
}
export default connect(mapStateToProps)(App);