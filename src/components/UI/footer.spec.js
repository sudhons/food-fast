import Footer from './Footer';

describe('Footer Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Footer />);
  });

  it('renders Footer component', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(Footer)).toBeDefined();
      expect(wrapper.find('#main-footer')).toHaveLength(1);
  });
});
