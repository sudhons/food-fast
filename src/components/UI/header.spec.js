import { Header, mapStateToProps } from './Header';

describe('Header Test Suite', () => {
  describe('Header component', () => {
    it('renders Header component if not logged in', () => {
      const wrapper = shallow(<Header toggleNavBar={()=>{}} user={{}}/>);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(Header)).toBeDefined();
        expect(wrapper.find('#main-header')).toHaveLength(1);
        expect(wrapper.find('#brand-name')).toHaveLength(1);
    });

    it('renders Header component if logged in', () => {
      const wrapper = shallow(<Header toggleNavBar={()=>{}} user={{userId: 2}}/>);
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(Header)).toBeDefined();
        expect(wrapper.find('#main-header')).toHaveLength(1);
        expect(wrapper.find('#brand-name')).toHaveLength(1);
    });
  });

  describe('MapStateToProps', () => {
    it('should map state to props correctly', () => {
      expect(mapStateToProps({user: {id: 3}})).toEqual({user: {id:3}});
    });
  });
});
