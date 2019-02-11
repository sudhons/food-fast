import * as actionTypes from '../constants';

export const addToCart = itemId => ({ type: actionTypes.ADD_TO_CART, itemId });

export const removeFromCart = itemId => ({ type: actionTypes.REMOVE_FROM_CART, itemId });

export const changeQuantity = (itemId, quantity) => (
  { type: actionTypes.CHANGE_QUANTITY, item: { mealId: itemId, quantity } }
);
