import axios from 'axios';
import * as actionTypes from '../constants';

const baseURL = 'https://food-fast.herokuapp.com/api/v1';

export const getMenu = alert => dispatch => {
    return axios.get(`${baseURL}/menu`)
      .then(res => dispatch({
        type: actionTypes.GET_MENU,
        menu: res.data.data
      }))
      .catch(() => alert.error('Something went wrong'));
};
