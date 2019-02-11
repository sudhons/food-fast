import { combineReducers } from 'redux';
import cart from './cart';
import menu from './menu';
import order from './order';
import user from './user';
import allOrders from './allOrders';

const reducer = combineReducers({
  cart,
  menu,
  user,
  orders :order,
  admin: allOrders,
});

export default reducer;
