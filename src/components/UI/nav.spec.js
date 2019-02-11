import { Nav, mapStateToProps ,mapDispatchToProps } from './Nav';

describe('Nav Test Suite', () => {
  let wrapper;
  describe('Nav component', () => {
    describe('Nav component when user is not logged in', () => {
      beforeAll(() => {
        wrapper = shallow(<Nav user={{}}/>);
      });

      it('renders Nav component if user is not logged in', () => {
          expect(wrapper).toHaveLength(1);
          expect(wrapper.find(Nav)).toBeDefined();
          expect(wrapper.find('#nav-bar')).toHaveLength(1);
          expect(wrapper.find('li')).toHaveLength(0);
      });
    });
  });

  describe('Nav component when user is logged in as a customer', () => {
    beforeAll(() => {
      wrapper = shallow(<Nav user={{userRole: 'customer'}} authActions={{logout: v => v}}/>);
    });

    it('renders Nav component if user has customer role', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(Nav)).toBeDefined();
      expect(wrapper.find('#nav-bar')).toHaveLength(1);
      expect(wrapper.find('li Link')).toHaveLength(1);
      expect(wrapper.find('li Link#logout')).toBeDefined();
      
    });

    it('should call authActions.logout in handleClick method', () => {
      wrapper.instance().handleClick();
    });
  });

  describe('Nav component when user is logged in as an admin', () => {
    it('renders Nav component to home', () => {
      wrapper = shallow(<Nav user={{userRole: 'admin'}} location={{pathname: '/home'}}/>);
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(Nav)).toBeDefined();
      expect(wrapper.find('#nav-bar')).toHaveLength(1);
      expect(wrapper.find('li Link')).toHaveLength(2);
    });

    it('renders Nav component to kitchen', () => {
      wrapper = shallow(<Nav user={{userRole: 'admin'}} location={{pathname: '/kitchen'}}/>);
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(Nav)).toBeDefined();
      expect(wrapper.find('#nav-bar')).toHaveLength(1);
      expect(wrapper.find('li Link')).toHaveLength(2);
    });
  });

  describe('MapStateToProps', () => {
    it('should map state to props correctly', () => {
      expect(mapStateToProps({user: 4})).toEqual({user: 4});
    });
  });

  describe('MapDispatchToProps', () => {
    it('should map dispatch to props correctly', () => {
      expect(mapDispatchToProps(() => null).toBeDefined);
    });
  });
});
