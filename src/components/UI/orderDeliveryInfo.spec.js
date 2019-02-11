import OrderDeliveryInfo from './OrderDeliveryInfo';

describe('Order delivery Info Test Suite', () => {
  it('renders OrderDeliveryInfo component', () => {
    const wrapper = shallow(<OrderDeliveryInfo order={{}}/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderDeliveryInfo)).toBeDefined();
    expect(wrapper.find('tr')).toHaveLength(7);
  });
});
