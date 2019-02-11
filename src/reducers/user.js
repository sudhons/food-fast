import * as actionTypes from '../constants';

const setUser = (state = {}, action) => {
  switch(action.type) {
    case actionTypes.SET_USER:
      return action.user
    default:
      return state;
  }
}

export default setUser;
