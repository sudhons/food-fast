import { OrderList, mapDispatchToProps } from './OrderList';

describe('Order List Test Suite', () => {
  let wrapper;
  const event = { preventDefault: () => null };
  const props = {
    orderActions: {deleteOrder: v => v},
    alert: { error: v => v, success: v => v },
    orderList: [{}]
  };
  beforeAll(() => {
    wrapper = shallow(<OrderList {...props}/>);
  });

  it('renders OrderList component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(OrderList)).toBeDefined();
    expect(wrapper.find('.section-orders')).toBeDefined();
    expect(wrapper.find('.head')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
  });

  it('should call deleleOrder', () => {
    wrapper.instance().deleteOrder(event, 5);
  });

  describe('MapDispatchToProps', () => {
    it('should map dispatch to props correctly', () => {
      expect(mapDispatchToProps(() => null).toBeDefined);
    });
  });
});
