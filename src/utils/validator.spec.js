import {
  validateUserData,
  validateLogin,
  isLetters,
  isValidEmail,
  isValidPassword,
  validateSignup,
  validateRecipientDetails
 } from './validators';

describe('Validators Test Suite', () => {
  describe('User data validation', () => {
    it('should return false if user data is not an object', () => {
      expect(validateUserData('user')).toEqual(false);
    });

    it('should return false if user data contain wrong userId', () => {
      expect(validateUserData({
        userRole: 'admin'
      })).toEqual(false);
    });
  
    it('should return false if user data contain wrong userRole', () => {
      expect(validateUserData({
        userId: 3,
        userRole: 'admins'
      })).toEqual(false);
    });
  
    it('should return true if userRole is admin', () => {
      expect(validateUserData({
        userId: 1,
        userRole: 'admin'
      })).toEqual(true);
    });

    it('should return true if userRole is customer', () => {
      expect(validateUserData({
        userId: 1,
        userRole: 'customer'
      })).toEqual(true);
    });
  });

  describe('Login validation', () => {
    it('should return error if email is invalid', () => {
      expect(validateLogin({
        email: 'adadda'
      })).toEqual({ isValid: false, error: 'Invalid Email'});
    });

    it('should return error if email is too long', () => {
      expect(validateLogin({
        email: 'adaddasdjajdjuaduauduuaud@jjadaduaudaidaduhuaduudadahduah.cuuadhuhauduahduhaudhuahdiaidauduaidhaduahdhaid'
      })).toEqual({ isValid: false, error: 'Invalid Email'});
    });

    it('should return error if password is less than 6 characters', () => {
      expect(validateLogin({
        email: 'afffg@jhjhh.chjhj',
        password: 'sda'
      })).toEqual({ isValid: false, error: 'Password is 6 characters minimum' });
    });

    it('should return error if password is contains non-alphanumeric characters', () => {
      expect(validateLogin({
        email: 'afffg@jhjhh.chjhj',
        password: 'sda,/ada'
      })).toEqual({ isValid: false, error : 'Password should be alphanumeric only' });
    });

    it('should return true for a valid user credentials', () => {
      expect(validateLogin({
        email: 'afffg@jhjhh.chjhj',
        password: 'sdaada32'
      })).toEqual({ isValid: true });
    });
  });

  describe('Letter validation', () => {
    it('should return false if contains non-aplhabetic characters', () => {
      expect(isLetters('admin32')).toEqual(false);
    });
  
    it('should return true if contains only aplhabetic characters', () => {
      expect(isLetters('admin')).toEqual(true);
    });
  });

  describe('Email validation', () => {
    it('should return false if email is not valid', () => {
      expect(isValidEmail('adadad')).toEqual(false);
    });
  
    it('should return true if email is valid', () => {
      expect(isValidEmail('admin@ss.co')).toEqual(true);
    });
  });

  describe('Password validation', () => {
    it('should return false if password is not valid', () => {
      expect(isValidPassword('adadad/,')).toEqual(false);
    });
  
    it('should return true if password is valid', () => {
      expect(isValidPassword('admin12')).toEqual(true);
    });
  });

  describe('Signup validation', () => {
    it('should return error if firstName is invalid', () => {
      expect(validateSignup({
        firstName: 'adadda./'
      })).toEqual({ isValid: false, error: 'Invalid first name' });
    });

    it('should return error if firstName is too long', () => {
      expect(validateSignup({
        firstName: 'adaddajasjdjadjakjdajhdakjdajhdhadhkadhadhasdjkhahsdjkhashjdahjsdahjsdjhsahjdajhdasjdjkadkashdajksdjkadjajkdsajdjkadjkhasdjkajkhdjkadjhsadjkasjkdajkdjadjhsa',
      })).toEqual({ isValid: false, error: 'first name is too long' });
    });

    it('should return error if lasttName is invalid', () => {
      expect(validateSignup({
        firstName: 'adadda',
        lastName: 'dad/ada'
      })).toEqual({ isValid: false, error: 'Invalid last name' });
    });

    it('should return error if lastName is too long', () => {
      expect(validateSignup({
        firstName: 'asdjaj',
        lastName: 'adaddajasjdjadjakjdajhdakjdajhdhadhkadhadhasdjkhahsdjkhashjdahjsdahjsdjhsahjdajhdasjdjkadkashdajksdjkadjajkdsajdjkadjkhasdjkajkhdjkadjhsadjkasjkdajkdjadjhsa',
      })).toEqual({ isValid: false, error: 'last name is too long' });
    });

    it('should return error if email is invalid', () => {
      expect(validateSignup({
        firstName: 'adada',
        lastName: 'asdaadad',
        email: 'adadda',
      })).toEqual({ isValid: false, error: 'Invalid Email'});
    });

    it('should return error if email is too long', () => {
      expect(validateSignup({
        firstName: 'adada',
        lastName: 'asdaadad',
        email: 'adaddasdjajdjuaduauduuaud@jjadaduaudaidaduhuaduudadahduah.cuuadhuhauduahduhaudhuahdiaidauduaidhaduahdhaid'
      })).toEqual({ isValid: false, error: 'Invalid Email'});
    });

    it('should return error if password is less than 6 characters', () => {
      expect(validateSignup({
        firstName: 'adada',
        lastName: 'csadada',
        email: 'afffg@jhjhh.chjhj',
        password: 'sda'
      })).toEqual({ isValid: false, error: 'Password is 6 characters minimum' });
    });

    it('should return error if password contains non-alphanumeric characters', () => {
      expect(validateSignup({
        firstName: 'adada',
        lastName: 'csadada',
        email: 'afffg@jhjhh.chjhj',
        password: 'sda,/ada'
      })).toEqual({ isValid: false, error : 'Password should be alphanumeric only' });
    });

    it('should return true for a valid user credentials', () => {
      expect(validateSignup({
        firstName: 'adada',
        lastName: 'csadada',
        email: 'afffg@jhjhh.chjhj',
        password: 'sdaada32'
      })).toEqual({ isValid: true });
    });
  });

  describe('Order recipient validation', () => {
    it('should return error if name is invalid', () => {
      expect(validateRecipientDetails({
        recipientName: 'adadda /cz'
      })).toEqual({ isValid: false, error: 'Invalid name'});
    });

    it('should return error if recipient name is too long', () => {
      expect(validateRecipientDetails({
        recipientName: 'adaddasdjajdjuaduauduuaudjjadaduaudaidaduhuaduudadahduah sdadadadadasdadlakjdaksdkjasnjkdnsjadnkjasndjknskajdnjkasndkjasnjkdnkjasdnjkanjkdnjkasndjknasjkdnjkandjkanjkdnakjndkasnkdnakndkjxankndkjankjdnkanjkdajkdjkandkjndacuuadhuhauduahduhaudhuahdiaidauduaidhaduahdhaid'
      })).toEqual({ isValid: false, error: 'Name is 80 characters maximum'});
    });

    it('should return error if address is not valid', () => {
      expect(validateRecipientDetails({
        recipientName: 'babs Oye',
        recipientAddress: 'ahd hjajhdhajdhja dahhb dbdba hdajhbhjdhjabj '
      })).toEqual({ isValid: false, error: 'Invalid address' });
    });

    it('should return error if address is too long', () => {
      expect(validateRecipientDetails({
        recipientName: 'babs Oye',
        recipientAddress: '32 adaddasdjajdjuaduauduuaudjjadaduaudaidaduhuaduudadahduah sdadadadadasdadlakjdaksdkjasnjkdnsjadnkjasndjknskajdnjkasndkjasnjkdnkjasdnjkanjkdnjkasndjknasjkdnjkandjkanjkdnakjndkasnkdnakndkjxankndkjankjdnkanjkdajkdjkandkjndacuuadhuhauduahduhaudhuahdiaidauduaidhaduahdhaids dhajdhad ahdhbahdbha dhadhabhdh adhahbhbhadb jhadhhahd hjajhdhajdhja dahhb dbdba hdajhbhjdhjabj '
      })).toEqual({ isValid: false, error: 'Address in 120 characters maximum' });
    });

    it('should return error if phone number is not valid', () => {
      expect(validateRecipientDetails({
        recipientName: 'babs Oye',
        recipientAddress: '34 omda dasta',
        recipientPhone: '24242/42s'
      })).toEqual({ isValid: false, error : 'Invalid Phone number' });
    });

    it('should return true for a valid recipient credentials', () => {
      expect(validateRecipientDetails({
        recipientName: 'babs Oye',
        recipientAddress: '34 omda dasta',
        recipientPhone: '234234424'
      })).toEqual({ isValid: true });
    });
  });
});
