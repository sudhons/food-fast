import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import setAuthToken from './utils/setAuthToken';
import { setUser } from './actions/auth';
import './styles/styles.css';
import Routes from './routes';

const initialState = {
  cart: JSON.parse(localStorage.getItem('food-cart')) || []
};

const newStore = store(initialState);
newStore.subscribe(() => localStorage.setItem('food-cart', JSON.stringify(newStore.getState().cart)));

if(localStorage['fast-food']) {
  setAuthToken(localStorage['fast-food']);
  const decoded = jwt_decode(localStorage['fast-food'])
  newStore.dispatch(setUser(decoded));
}

const options =  { timeout: 4000, position: 'top right', transition: 'fade' };

render(
  <Provider store={newStore}>
    <AlertProvider template={AlertTemplate} {...options}>
      <Routes />
    </AlertProvider>
  </Provider>,
  document.getElementById('app')
);
