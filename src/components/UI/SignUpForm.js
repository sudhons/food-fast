import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/auth';
import { validateSignup } from '../../utils/validators';

export class SignupForm extends Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    password2: '',
  };

  onChange = event => this.setState({[event.target.name]: event.target.value});

  onSubmit = (event) => {
    event.preventDefault();
    const isMatch = () => (
      this.state.password === this.state.password2
      ? { isValid: true }
      : { isValid:false, error: 'passwords do not match' });

    const newUser = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      email: this.state.email,
      password: this.state.password
    };

    const validationResult = isMatch().isValid ?  validateSignup(newUser) : isMatch();

    if (!validationResult.isValid) {
      this.props.alert.error(validationResult.error);
    } else {
      this.props.authActions.signup(newUser, this.props.alert);
    }
  }

  render() {
    return (
      <form id="signup" className="form" onSubmit={this.onSubmit}>
        <h1 className="form-heading">Create an account</h1>
        <div>
          <i className="fas fa-user"></i>
          <input
            className="form-input"
            name="firstname"
            type="text"
            value={this.state.firstName}
            onChange={this.onChange}
            placeholder="First Name"
            required />
        </div>
        <div>
          <i className="fas fa-user"></i>
          <input
            className="form-input"
            name="lastname"
            type="text"
            value={this.state.lastName}
            onChange={this.onChange}
            placeholder="Last Name"
            required />
        </div>
        <div>
          <i className="fas fa-at"></i>
          <input
            className="form-input"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.onChange}
            placeholder="Email"
            required />
        </div>
        <div>
          <i className="fas fa-key"></i>
          <input
            className="form-input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.onChange}
            placeholder="Password"
            required />
        </div>
        <div>
          <i className="fas fa-key"></i>
          <input
          className="form-input"
          name="password2"
          type="password"
          value={this.state.password2}
          onChange={this.onChange}
          placeholder="Confirm password"
          required />
        </div>
        <button id="btn-signup" type="submit">signup</button>
        <p>Already have an account? <a id="to-login" href="#" onClick={this.props.changeForm}>login</a></p>
      </form>
    );
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(withAlert(SignupForm));
