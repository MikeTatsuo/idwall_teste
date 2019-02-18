import React, { Component } from 'react';
import Header from '../components/Header';
import * as provider from '../providers/SignUpProvider';
import { connect } from "react-redux";
import { updateUser } from "../actions/User.action";

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = { email: "" }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    this.signup(this.state.email)
    event.preventDefault();
  }

  onUpdateUser(data) {
    this.props.updateUser({
      email: data.email,
      token: data.token,
      error: data.error
    })
  }

  signup(email) {
    provider.signup(email)
      .then(r => {
        this.onUpdateUser(r)
      })
      .catch(erro => {
        this.onUpdateUser({ error: erro })
      })
  }

  render() {
    return (
      <div className="signup">
        < Header />
        <form onSubmit={this.handleSubmit}>
          <input type="email" value={this.state.email} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>

        <p>Token : {this.props.token}</p>
        <p>Erro: {this.props.error}</p>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    email: state.user.email,
    token: state.user.token,
    error: state.user.error
});

export default connect(mapStateToProps, { updateUser })(SignUpPage);