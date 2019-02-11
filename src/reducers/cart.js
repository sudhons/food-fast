import * as actionTypes from '../constants';

const cart = (state = [], action) => {
  switch(action.type) {
    case actionTypes.ADD_TO_CART:
      return [...state, {mealId: action.itemId, quantity: 1}];

    case actionTypes.REMOVE_FROM_CART:
      return state.filter(item => item.mealId !== action.itemId);
      
    case actionTypes.CHANGE_QUANTITY:
      return state.map(item => item.mealId !== action.item.mealId ? item : action.item)

    case actionTypes.EMPTY_CART:
      return [];
    default:
      return state;
  }
}

export default cart;
