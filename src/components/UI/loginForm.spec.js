import { LoginForm, mapDispatchToProps } from './LoginForm';

describe('Login Test Suite', () => {
  let wrapper;
  let instance;
  const alert = { error: v => v, success: v => v };
  const props = {
    alert,
    authActions: {login: v => v}
  };
  const event = { preventDefault: () => null };
  const event1 = {
    preventDefault: () => null,
    target: {
      name: 'email',
      value:'sud@sud.sud'
    },
  };
  const event2 = {
    preventDefault: () => null,
    target: {
      name: 'password',
      value:'sudsud34'
    }
  };
  describe('Login component', () => {
    beforeAll(() => {
      wrapper = shallow(<LoginForm {...props}/>);
      instance = wrapper.instance();
    });
    it('renders LoginForm component', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(LoginForm)).toBeDefined();
        expect(wrapper.find('#login')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(2);
        expect(wrapper.find('input').first().prop('type')).toBe('email');
        expect(wrapper.find('input').last().prop('type')).toBe('password');
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').prop('type')).toBe('submit');
        expect(wrapper.find('button').text()).toBe('login');
    });

    it('should have email and password as state keys', () => {
      expect(wrapper.state('email')).toBeDefined();
      expect(wrapper.state('password')).toBeDefined();
    });

    it('should update state input onChange', () => {
      instance.onChange(event1);
      expect(wrapper.state('email')).toBe('sud@sud.sud');
    });
    
    it('should alert validation error on onSubmit', () => {
      instance.onSubmit(event);
    });
  
    it('should call authActions to submit', () => {
      instance.onChange(event2);
      instance.onSubmit(event);
    });
  });

  describe('MapDispatchToProps', () => {
    it('should map dispatch to props correctly', () => {
      expect(mapDispatchToProps(() => null).toBeDefined);
    });
  });
});
