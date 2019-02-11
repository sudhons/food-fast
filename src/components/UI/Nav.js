import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";
import { connect } from 'react-redux';
import * as authActions from '../../actions/auth';
import setAuthToken from '../../utils/setAuthToken';
import { Link } from 'react-router-dom';

export class Nav extends Component {
  handleClick = () => {
    this.props.authActions.logout();
    setAuthToken(false);
  }
  
  render() {
    const userRole = this.props.user.userRole;
    if (userRole!=='customer' && userRole!=='admin') {
      return (
        <nav id="nav-bar" style={this.props.style}>
        <ul>
        </ul>
      </nav>
      )
    }
    if (userRole==='admin') {
      const page = this.props.location.pathname=== '/kitchen' ? 'home' : 'kitchen'; 
      return (
        <nav id="nav-bar" style={this.props.style}>
          <ul>
            <li><Link to={`/${page}`}>{page}</Link></li>
            <li>
              <Link id="logout"
                to="/"
                onClick={this.handleClick}>
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      );
    }
    return (
      <nav id="nav-bar" style={this.props.style}>
        <ul>
          <li>
            <Link id="logout"
              to="/"
              onClick={this.handleClick}>
              Log out
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
};

export const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export const mapDispatchToProps = dispatch => {
  return {
    authActions: bindActionCreators(authActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Nav));
