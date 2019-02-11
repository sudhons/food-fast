import SideBar from './SideBar';

describe('Side Bar Test Suite', () => {
  it('renders Side Bar component', () => {
    const wrapper = shallow(<SideBar items={['side']}/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(SideBar)).toBeDefined();
    expect(wrapper.find('#menu-bar')).toHaveLength(1);
    expect(wrapper.find('ul')).toHaveLength(1);
  });
});
