import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withAlert } from 'react-alert';
import { bindActionCreators } from 'redux';
import * as authActions from '../../actions/auth';
import { validateLogin } from '../../utils/validators';

export class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  onChange = event => this.setState({[event.target.name]: event.target.value});

  onSubmit = event => {
    event.preventDefault();
    const user = {
      email: this.state.email,
      password: this.state.password
    };

    const validationResult = validateLogin(user);

    if (!validationResult.isValid) {
      this.props.alert.error(validationResult.error);
    } else {
      this.props.authActions.login(user, this.props.alert);
    }
  };

  render() {
    return (
      <form id="login" className="form" onSubmit={this.onSubmit}>
        <h1 className="form-heading">Welcome Back!</h1>
        <div>
          <i className="fas fa-at"></i>
          <input className="form-input"
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
        <button id="btn-login" type="submit">login</button>
        <p>Don't have an account? <a id="to-signup" href="#" onClick={this.props.changeForm}>signup</a></p>
      </form>
    );
  }
};

export const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch),
  };
};

export default connect(null, mapDispatchToProps)(withAlert(LoginForm));
