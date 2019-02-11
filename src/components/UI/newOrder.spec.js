import { NewOrder, mapDispatchToProps } from './NewOrder';
import OrderItemCard from './OrderItemCard';
describe('NewOrder Test Suite', () => {
  let wrapper;
  let instance;
  const event = {
    preventDefault: () => null,
    target: {
      value: 2
    },
  };
  const props = {
    cartActions: {changeQuantity: v => v, removeFromCart: v => v},
    cart: [{menu_id: 4}, {menu_id: 5}]
  };

  beforeAll(() => {
    wrapper = shallow(<NewOrder {...props}/>);
    instance = wrapper.instance();
  });

  it('renders NewOrder component', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(NewOrder)).toBeDefined();
      expect(wrapper.find('.meal-cat')).toBeDefined();
  });

  it('renders OrderItem Card component', () => {
    expect(wrapper.find(OrderItemCard)).toBeDefined();
  });

  it('should change cart item quantity', () => {
    instance.changeQuantity(event, 4);
  });

  it('should change cart item quantity', () => {
    instance.removeFromCart(event, 4);
  });
});

describe('MapDispatchToProps', () => {
  it('should map dispatch to props correctly', () => {
    expect(mapDispatchToProps(() => null).toBeDefined);
  });
});
