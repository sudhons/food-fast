import axios from 'axios';
import setAuthToken from '../utils/setAuthToken';
import jwt_decode from 'jwt-decode';
import * as actionTypes from '../constants';

const baseURL = 'https://food-fast.herokuapp.com/api/v1';

export const login = (userData, alert)  => dispatch => {
  return axios.post(`${baseURL}/auth/login`, userData)
    .then(res => {
      const { token } = res.data.data;
      localStorage.setItem('fast-food', token);
      setAuthToken(token);
      dispatch(setUser(jwt_decode(token)));
    })
    .catch(err => {
      err.response && err.response.status == 401
      ? alert.error('Invalid Credentials')
      : alert.error('Something went wrong')
    })
};

export const signup = (userData, alert)  => dispatch => {
  return axios.post(`${baseURL}/auth/signup`, userData)
    .then(res => {
      const { token } = res.data.data;
      localStorage.setItem('fast-food', token);
      setAuthToken(token);
      dispatch(setUser(jwt_decode(token)));
    })
    .catch(err => {
      err.response && err.response.status == 409
      ? alert.error('Email already in use')
      : alert.error('Something went wrong')
    })
};

export const setUser = user => {
  return { type: actionTypes.SET_USER, user }
};

export const logout = () => dispatch => {
  localStorage.removeItem('fast-food');
  setAuthToken(false);
  dispatch(setUser({}));
};
 