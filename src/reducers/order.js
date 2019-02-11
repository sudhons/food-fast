import * as actionTypes from '../constants';

const order = (state = [], action) => {
  switch(action.type) {
    case actionTypes.GET_ORDERS:
      return action.orders;
    case actionTypes.DELETE_ORDER:
      return state.filter(order => order.order_id !== action.orderId);
    case actionTypes.MAKE_ORDER:
    return [...state, action.orders];
    default:
      return state;
  }
}

export default order;
