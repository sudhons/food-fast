import { SignupForm, mapDispatchToProps } from './SignUpForm';

describe('Sign up Test Suite', () => {
  let wrapper;
  let instance;
  const alert = { error: v => v, success: v => v };
  const props = {
    alert,
    authActions: {signup: v => v}
  };
  const event = { preventDefault: () => null };
  const eventFunc  = (nameValue, value) => ({
    preventDefault: () => null,
    target: {
      name: nameValue,
      value,
    },
  });
  describe('Signup Form component', () => {
    beforeAll(() => {
      wrapper = shallow(<SignupForm {...props}/>);
      instance = wrapper.instance();
    });
    it('renders SignupForm component', () => {
        expect(wrapper).toHaveLength(1);
        expect(wrapper.find(SignupForm)).toBeDefined();
        expect(wrapper.find('#signup')).toHaveLength(1);
        expect(wrapper.find('input')).toHaveLength(5);
        expect(wrapper.find('input').first().prop('name')).toBe('firstname');
        expect(wrapper.find('input').at(1).prop('name')).toBe('lastname');
        expect(wrapper.find('input').at(2).prop('name')).toBe('email');
        expect(wrapper.find('input').at(3).prop('name')).toBe('password');
        expect(wrapper.find('input').last().prop('name')).toBe('password2');
        expect(wrapper.find('button')).toHaveLength(1);
        expect(wrapper.find('button').prop('type')).toBe('submit');
        expect(wrapper.find('button').text()).toBe('signup');
    });

    it('should update state input onChange', () => {
      instance.onChange(eventFunc('firstname', 'olujames'));
      expect(wrapper.state('firstname')).toBe('olujames');
    });
    
    it('should alert validation error on onSubmit', () => {
      instance.onSubmit(event);
    });

    it('should alert validation error on password do not match', () => {
      instance.onChange(eventFunc('password', 'olujames'));
      instance.onChange(eventFunc('password2', 'dolujames'));
      instance.onSubmit(event);
    });
  
    it('should call authActions to submit', () => {
      instance.onChange(eventFunc('lastname', 'james'));
      instance.onChange(eventFunc('password2', 'olujames'));
      instance.onChange(eventFunc('email', 'olujames@olu.olu'));
      instance.onSubmit(event);
    });
  });

  describe('MapDispatchToProps', () => {
    it('should map dispatch to props correctly', () => {
      expect(mapDispatchToProps(() => null).toBeDefined);
    });
  });
});
