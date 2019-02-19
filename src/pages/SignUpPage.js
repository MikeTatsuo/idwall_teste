import React, { Component } from 'react';
import { Header } from '../components/Header';
import * as provider from '../providers/SignUpProvider';
import { connect } from "react-redux";
import { updateUser } from "../actions/User.action";
import M from 'materialize-css';

class SignUpPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: ""
    }

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
        M.toast({ html: this.props.error })
      })
  }

  render() {
    return (
      <section>
        <div className="row">
          <div className="col s12">
            <ul className="collapsible">
              <li>
                <div className="collapsible-header">
                  < Header />
                </div>
                <div className="collapsible-body">
                  <div className="row">
                    <form className="col s12" onSubmit={this.handleSubmit}>
                      <div className="row">
                        <div className="input-field col s12">
                          <input id="email" type="email" className="validate" value={this.state.email} onChange={this.handleChange} />
                          <label htmlFor="email">Email</label>
                          <button className="btn waves-effect waves-light white grey-text right" type="submit" name="action">Sign Up
                        <i className="material-icons right">send</i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
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