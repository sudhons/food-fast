import userReducer from './user';

describe('Setting user Reducer Test Suite', () => {
  const user = {id: 5};
  it('should return the initial state', () => {
    expect(userReducer(undefined, {})).toEqual({});
  });

  it('should return new state containing user', () => {
    const state = userReducer(undefined, {
      type: 'SET_USER',
      user,
    });
    expect(state).toEqual(user);
  });
});
