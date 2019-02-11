import React from 'react';
import jwt_decode from 'jwt-decode';
import { Redirect, Route } from 'react-router-dom';

const ProtectedRoute = ({component: Component, ...rest}) => {
  const token = localStorage.getItem('fast-food');
  return <Route {...rest} render={props => (
    token && (jwt_decode(token).userRole==='customer' || jwt_decode(token).userRole==='admin')
    ? ( <Component {...props} /> )
  : ( <Redirect to='/' /> )
  )} />
};

export default ProtectedRoute;
