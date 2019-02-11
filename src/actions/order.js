import axios from 'axios';
import * as actionTypes from '../constants';

const baseURL = 'https://food-fast.herokuapp.com/api/v1';

export const deleteOrder = (orderId, alert) => dispatch => {
  return axios.delete(`${baseURL}/orders/${orderId}`)
    .then(() => {
      dispatch({
      type: actionTypes.DELETE_ORDER,
      orderId,
      });
      alert.success('Order successfully deleted');
    })
    .catch(() => alert.error('Something went wrong'));
}

export const getOrders = (userId, alert)  => dispatch => {
  return axios.get(`${baseURL}/users/${userId}/orders`)
    .then(res => dispatch({
      type: actionTypes.GET_ORDERS,
      orders: res.data.data
    }))
    .catch(() => alert.error('Something went wrong'));
}

export const makeOrder = (order, alert) => dispatch => {
  return axios.post(`${baseURL}/orders`, order)
    .then(res => {
      dispatch({type: actionTypes.EMPTY_CART});
      dispatch({
      type: actionTypes.MAKE_ORDER,
      orders: res.data.data
    });
    alert.success('Order successfully placed');
  })
  .catch(() => alert.error('Something went wrong'));
};
