import menuReducer from './menu';

describe('Menu Reducer Test Suite', () => {
  const initialState = [];

  const menu = [{id: 3}, {id: 7}];

  it('should return the initial state', () => {
    expect(menuReducer(undefined, {})).toEqual([]);
  });

  it('should return new state containing menu', () => {
    const state = menuReducer(initialState, {
      type: 'GET_MENU',
      menu,
    });
    expect(state).toEqual(menu);
  });
});
