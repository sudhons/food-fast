import OrderDetails from './OrderDetails';

describe('Order details form Test Suite', () => {
  it('renders OrderDetails component', () => {
    const wrapper = shallow(<OrderDetails order={{}}/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderDetails)).toBeDefined();
  });

  it('renders OrderDetails component with deleting order function', () => {
    const wrapper = shallow(<OrderDetails order={{}} deleteOrder={() => null}/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderDetails)).toBeDefined();
    expect(wrapper.find('.delete-order')).toBeDefined();
    expect(wrapper.find('.delete-order').simulate('click')).toBeDefined();
  });
});
