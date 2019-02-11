import OrderSummary from './OrderSummary';

describe('Order Summary Test Suite', () => {
  it('renders OrderSummary component', () => {
    const wrapper = shallow(<OrderSummary order={{order_status: 'new'}} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderSummary)).toBeDefined();
    expect(wrapper.find('.order-table')).toBeDefined();
    expect(wrapper.find('.fa-angle-right').prop('style')).toEqual({ transform: 'rotate(0deg)'});
  });

  it('renders OrderSummary component with details showing', () => {
    const wrapper = shallow(<OrderSummary show order={{order_status: 'new'}} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderSummary)).toBeDefined();
    expect(wrapper.find('.order-table')).toBeDefined();
    expect(wrapper.find('.fa-angle-right').prop('style')).toEqual({ transform: 'rotate(90deg)'});
  });

  it('renders OrderSummary component with button for accepting order', () => {
    const wrapper = shallow(<OrderSummary order={{order_status: 'new'}} handleClick={() => null} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderSummary)).toBeDefined();
    expect(wrapper.find('.order-table')).toBeDefined();
    expect(wrapper.find('.accept')).toHaveLength(1);
    expect(wrapper.find('.fa-angle-right').prop('style')).toEqual({ transform: 'rotate(0deg)'});
  });

  it('renders OrderSummary component with button for completing order', () => {
    const wrapper = shallow(<OrderSummary order={{order_status: 'proccessing'}} handleClick={() => null} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderSummary)).toBeDefined();
    expect(wrapper.find('.order-table')).toBeDefined();
    expect(wrapper.find('.complete')).toHaveLength(1);
    expect(wrapper.find('.fa-angle-right').prop('style')).toEqual({ transform: 'rotate(0deg)'});
  });

  it('should call handleClick button', () => {
    const wrapper = shallow(<OrderSummary order={{order_status: 'proccessing'}} handleClick={() => null} />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderSummary)).toBeDefined();
    expect(wrapper.find('.order-table')).toBeDefined();
    expect(wrapper.find('.complete')).toHaveLength(1);
    expect(wrapper.find('.status-btn').simulate('click')).toBeDefined();
  });
});
