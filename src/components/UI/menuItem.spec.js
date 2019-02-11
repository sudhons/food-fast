import MenuItem from './MenuItem';

describe('MenuItem Test Suite', () => {
  it('renders MenuItem component if it is not in cart', () => {
    const wrapper = shallow(<MenuItem 
      menuItemDetails={{image: 'ade ', title: 'dad', menu_id: 4, price: 30, isInCart: false}}
      addToCart={() => {}}
      />);
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(MenuItem)).toBeDefined();
      expect(wrapper.find('.items')).toBeDefined();
      expect(wrapper.find('.item-btn').text()).toEqual('add to cart');
      expect(wrapper.find('.item-btn').simulate('click'));
  });

  it('renders MenuItem component if it is in cart', () => {
    const wrapper = shallow(<MenuItem 
      menuItemDetails={{image: 'ade ', title: 'dad', menu_id: 4, price: 30, isInCart: true}}
      addToCart={() => {}}
      />);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(MenuItem)).toBeDefined();
    expect(wrapper.find('.items')).toBeDefined();
    expect(wrapper.find('.item-btn').text()).toEqual('added to cart');
    expect(wrapper.find('.disabled')).toBeDefined();
  });
});
