import React, { Component } from 'react';
import { Header } from '../components/Header';
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
      <section>
        <a className="btn btn-light" type="button" data-toggle="collapse" href="#collapseSignUpInput" role="button" aria-expanded="false">
          < Header />
        </a>
        <div className="collapse" id="collapseSignUpInput">
          <div className="card card-body border border-white">
            <p>Erro: {this.props.error}</p>
            <form onSubmit={this.handleSubmit}>
              <input className="d-block" type="email" value={this.state.email} onChange={this.handleChange} />
              <button className="btn btn-light text-muted d-block" type="submit" value="Submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  token: state.user.token,
  error: state.user.error
});

export default connect(mapStateToProps, { updateUser })(SignUpPage);