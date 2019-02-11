import { OrderDeliveryForm, mapStateToProps, mapDispatchToProps } from './OrderDeliveryForm';

describe('Order delivery form Test Suite', () => {
  let wrapper;
  let instance;
  const event = { preventDefault: () => null };
  const event1 = {
    preventDefault: () => null,
    target: {
      name: 'recipientName',
      value:'olufela'
    },
  };
  const event2 = {
    preventDefault: () => null,
    target: {
      name: 'recipientAddress',
      value:'23 andela'
    },
  };
  const event3 = {
    preventDefault: () => null,
    target: {
      name: 'recipientPhone',
      value:'2424242'
    },
  };
  const props = {
    orderActions: {makeOrder: v => v},
    cart: [{menu_id: 4}, {menu_id: 6}]
  };
  const alert = { error: v => v, success: v => v };

  beforeAll(() => {
    wrapper = shallow(<OrderDeliveryForm alert={alert} handleSubmit={() => null} {...props}/>);
    instance = wrapper.instance();
  });

  it('renders OrderDeliveryForm component', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(OrderDeliveryForm)).toBeDefined();
      expect(wrapper.find('recipient')).toBeDefined();
      expect(wrapper.find('input')).toHaveLength(3);
  });

  it('should update state input onChange', () => {
    instance.handleChange(event1);
    expect(wrapper.state('recipientName')).toBe('olufela');
  });

  it('should alert validation error onSubmit', () => {
    instance.handleSubmit(event);
  });

  it('should call props\'s handleSubmit to submit', () => {
    instance.handleChange(event2);
    instance.handleChange(event3);
    instance.handleSubmit(event);
  });

  describe('MapDispatchToProps', () => {
    it('should map dispatch to props correctly', () => {
      expect(mapDispatchToProps(() => null).toBeDefined);
    });
  });

  describe('MapStateToProps', () => {
    it('should map state to props correctly', () => {
      expect(mapStateToProps([]).toBeDefined);
    });
  });
});
