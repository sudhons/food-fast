import * as actionTypes from '../constants';

const order = (state = [], action) => {
  switch(action.type) {
    case actionTypes.GET_ALL_ORDERS:
      return action.orders;
    case actionTypes.ACCEPT_ORDER:
      return state.map(item => item.order_id === action.orderId ? { ...item, order_status: 'processing' } : item);
    case actionTypes.COMPLETE_ORDER:
    return state.map(item => item.order_id === action.orderId ? { ...item, order_status: 'completed' } : item);
    default:
      return state;
  }
}

export default order;
