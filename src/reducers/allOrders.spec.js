import allOrdersReducer from './allOrders';

describe('Admin Orders Reducer Test Suite', () => {
  const initialState = [];

  const orders = [{order_id: 3, order_status: 'new'}, {order_id: 7, order_status: 'processing'}];

  it('should return the initial state', () => {
    expect(allOrdersReducer(undefined, {})).toEqual([]);
  });

  it('should return new state containing orders', () => {
    const state = allOrdersReducer(initialState, {
      type: 'GET_ALL_ORDERS',
      orders,
    });
    expect(state).toEqual(orders);
  });

  it('should return new state with order status changed to processing', () => {
    const state = allOrdersReducer(orders, {
      type: 'ACCEPT_ORDER',
      orderId: 3,
    });
    expect(state).toEqual([
      {order_id: 3, order_status: 'processing'},
      {order_id: 7, order_status: 'processing'}
    ]);
  });

  it('should return new state with order status changed to completed', () => {
    const state = allOrdersReducer(orders, {
      type: 'COMPLETE_ORDER',
      orderId: 7,
    });
    expect(state).toEqual([
      {order_id: 3, order_status: 'new'},
      {order_id: 7, order_status: 'completed'}
    ]);
  });
  
});
