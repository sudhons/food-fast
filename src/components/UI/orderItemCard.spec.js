import OrderItemCard from './OrderItemCard';

describe('Order Item Card Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<OrderItemCard orderItem={{}} removeFromCart={() => null} changeQuantity={() => null}/>);
  });

  it('renders OrderItemCard component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderItemCard)).toBeDefined();
    expect(wrapper.find('.order-items')).toBeDefined();
  });

  it('should remove Item from cart', () => {
    expect(wrapper.find('.delete-cart-item').simulate('click')).toBeDefined();
  });

  it('should change Item quantity', () => {
    expect(wrapper.find('.qty').simulate('change')).toBeDefined();
  });
});
