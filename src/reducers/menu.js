import * as actionTypes from '../constants';

const menu = (state = [], action) => {
  switch(action.type) {
    case actionTypes.GET_MENU:
      return action.menu
    default:
      return state;
  }
}

export default menu;
