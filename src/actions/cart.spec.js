import { addToCart, removeFromCart, changeQuantity } from './cart';

describe('Cart Actions Test Suite', () => {
  it('should dispatch ADD_TO_CART action', () => {
    expect(addToCart(4)).toEqual({type: 'ADD_TO_CART', itemId: 4});
  });

  it('should dispatch REMOVE_FROM_CART action', () => {
    expect(removeFromCart(4)).toEqual({type: 'REMOVE_FROM_CART', itemId: 4});
  });

  it('should dispatch CHANGE_QUANTITY action', () => {
    expect(changeQuantity(4, 2)).toEqual({type: 'CHANGE_QUANTITY', item: { mealId: 4, quantity: 2 }});
  });
});
