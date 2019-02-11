import cartReducer from './cart';

describe('Cart Reducer Test Suite', () => {
  const initialState = [{mealId: 3, quantity: 5}, {mealId: 6, quantity: 1}];

  it('should return the initial state', () => {
    expect(cartReducer(undefined, {})).toEqual([]);
  });

  it('should return new state with the new Item added', () => {
    const state = cartReducer(initialState, {
      type: 'ADD_TO_CART',
      itemId: 9,
    });
    expect(state).toEqual([
      {mealId: 3, quantity: 5},
      {mealId: 6, quantity: 1},
      {mealId: 9, quantity: 1},
    ]);
  });

  it('should return new state with the Item removed', () => {
    const state = cartReducer(initialState, {
      type: 'REMOVE_FROM_CART',
      itemId: 9,
    });
    expect(state).toEqual([
      {mealId: 3, quantity: 5},
      {mealId: 6, quantity: 1},
    ]);
  });

  it('should return new state with the Item quantity changes', () => {
    const state = cartReducer(initialState, {
      type: 'CHANGE_QUANTITY',
      item: {mealId: 6, quantity:4 },
    });
    expect(state).toEqual([
      {mealId: 3, quantity: 5},
      {mealId: 6, quantity: 4},
    ]);
  });

  it('should return an emoty array as the new state', () => {
    const state = cartReducer(initialState, {type: 'EMPTY_CART'});
    expect(state).toEqual([]);
  });
});
