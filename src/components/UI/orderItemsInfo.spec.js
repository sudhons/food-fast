import OrderItemsInfo from './OrderItemsInfo';

describe('Order Items Info Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<OrderItemsInfo items={[{}]} />);
  });

  it('renders OrderItemsInfo component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderItemsInfo)).toBeDefined();
    expect(wrapper.find('.order-amount')).toBeDefined();
    expect(wrapper.find('thead')).toHaveLength(1);
    expect(wrapper.find('tbody')).toHaveLength(1);
    expect(wrapper.find('tfoot')).toHaveLength(1);
  });
});
