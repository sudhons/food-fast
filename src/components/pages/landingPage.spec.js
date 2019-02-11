import LandingPage from './LandingPage';

describe('Landing Page Test Suite', () => {
  let wrapper;
  describe('Landing Page component', () => {
    beforeAll(() => {
      wrapper = shallow(<LandingPage />);
    });

    it('renders LandingPage component', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(LandingPage)).toBeDefined();
        expect(wrapper.find('#main')).toHaveLength(1);
        expect(wrapper.find('.container')).toHaveLength(1);
    });

    it('should update state input onChange', () => {
      const event = { preventDefault: () => null };
      wrapper.instance().changeForm(event);
      expect(wrapper.state('isANewUser')).toBe(false);
    });
  });
});
