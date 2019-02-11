import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LandingPage from './components/pages/LandingPage';
import ProtectedRoute from './utils/ProtectedRoute';
import IndexRoute from './utils/IndexRoute';

export default () => (
  <Router>
    <Switch>
        <IndexRoute path="/" exact component={LandingPage} />
        <ProtectedRoute path="/home" exact component={HomePage} />
    </Switch>
  </Router>
);
