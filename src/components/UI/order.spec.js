import Order from './Order';

describe('Order Test Suite', () => {
  let wrapper;
  describe('Order component', () => {
    beforeAll(() => {
      wrapper = shallow(<Order user={{}}/>);
    });

    it('renders Order component', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(Order)).toBeDefined();
        expect(wrapper.find('li')).toHaveLength(1);
    });

    it('should update state input onChange', () => {
      const event = { preventDefault: () => null };
      wrapper.instance().handleChange(event);
      expect(wrapper.state('showDetails')).toBe(true);
    });
  });
});
