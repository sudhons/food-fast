import SideBarItem from './SideBarItem';

describe('Side Bar Item Test Suite', () => {
  it('renders SideBarItem component', () => {
    const wrapper = shallow(<SideBarItem items={['side']}/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(SideBarItem)).toBeDefined();
    expect(wrapper.find('.menu-category')).toHaveLength(1);
    expect(wrapper.find('a.menu-category-link')).toHaveLength(1);
  });

  it('renders active SideBarItem component', () => {
    const wrapper = shallow(<SideBarItem items={['side']} isActive/>);
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(SideBarItem)).toBeDefined();
    expect(wrapper.find('.menu-category')).toHaveLength(1);
    expect(wrapper.find('a.menu-category-link')).toHaveLength(1);
    expect(wrapper.find('a#active')).toHaveLength(1);
  });
});
