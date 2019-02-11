import orderReducer from './order';

describe('User Orders Reducer Test Suite', () => {
  const initialState = [];

  const orders = [{order_id: 3}, {order_id: 7}, {order_id: 9}];

  it('should return the initial state', () => {
    expect(orderReducer(undefined, {})).toEqual([]);
  });

  it('should return new state containing orders', () => {
    const state = orderReducer(initialState, {
      type: 'GET_ORDERS',
      orders,
    });
    expect(state).toEqual(orders);
  });

  it('should return new state with the order deleted', () => {
    const state = orderReducer(orders, {
      type: 'DELETE_ORDER',
      orderId: 7
    });
    expect(state).toEqual([
      {order_id: 3},
      {order_id: 9}
    ]);
  });

  it('should return new state with an order added to the state', () => {
    const state = orderReducer(orders, {
      type: 'MAKE_ORDER',
      orders: {order_id: 10}
    });
    expect(state).toEqual([
      {order_id: 3},
      {order_id: 7},
      {order_id: 9},
      {order_id: 10}
    ]);
  });
});
