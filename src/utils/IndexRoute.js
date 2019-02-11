import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';

const IndexRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => (
    rest.user && (rest.user.userRole==='customer' || rest.user.userRole==='admin')
    ? ( <Redirect to='/home' /> )
    : ( <Component {...props} /> )
  )} />
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(IndexRoute);
