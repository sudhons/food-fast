import { Menu, mapDispatchToProps } from './Menu';
import MenuItem from './MenuItem';

describe('Menu Test Suite', () => {
  let wrapper;
  const props = {
    cartActions: {addToCart: v => v},
    menu: [{menu_id: 4}, {menu_id: 6}]
  };
  beforeAll(() => {
    wrapper = shallow(<Menu {...props}/>);
  });

  it('renders Menu component', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(Menu)).toBeDefined();
      expect(wrapper.find(MenuItem)).toBeDefined();
      expect(wrapper.find(MenuItem)).toHaveLength(2);
  });

  it('should add item to cart', () => {
    wrapper.instance().addMenuToCart(4);
  });

  describe('MapDispatchToProps', () => {
    it('should map dispatch to props correctly', () => {
      expect(mapDispatchToProps(() => null).toBeDefined);
    });
  });
});
