export const validateUserData = value => (
  typeof value === 'object' && typeof value.userId === 'number'
  &&  ['admin', 'customer'].includes(value.userRole)
);

export const isValidEmail = value => /^\w+@\w+\.\w+$/.test(value);

export const isValidPassword = value => /^[A-Za-z0-9]+$/.test(value);

export const isLetters = value => /^[A-Za-z]+$/.test(value.trim());

export const isNumber = value => /^[0-9]+$/.test(value.trim());

export const isValidAddress = value => /^[0-9]+ [A-Za-z 0-9]+$/.test(value.trim());

export const validateLogin = user => {
  if (!isValidEmail(user.email) || user.email.length > 40) {
    return { isValid: false, error: 'Invalid Email'};
  }
  if (user.password.length < 6) {
    return { isValid: false, error: 'Password is 6 characters minimum' };
  }
  if (!isValidPassword(user.password)) {
    return { isValid: false, error : 'Password should be alphanumeric only' };
  }
  return { isValid: true };
};

export const validateSignup = user => {
  if (!isLetters(user.firstName)) {
    return { isValid: false, error: 'Invalid first name' };
  } else if (user.firstName.length > 40) {
    return { isValid: false, error: 'first name is too long' };
  } else if (!isLetters(user.lastName)) {
    return { isValid: false, error: 'Invalid last name' };
  } else if (user.lastName.length > 40) {
    return { isValid: false, error: 'last name is too long' };
  } else if (!isValidEmail(user.email) || user.email.length > 40) {
    return { isValid: false, error: 'Invalid Email' };
  } else if (user.password.length < 6) {
    return { isValid: false, error: 'Password is 6 characters minimum' };
  } else if (!isValidPassword(user.password)) {
    return { isValid: false, error: 'Password should be alphanumeric only' };
  }
  return { isValid: true };
};

export const validateRecipientDetails = recipient => {
  if (!isLetters(recipient.recipientName.replace(/\s+/, ''))) {
    return { isValid: false, error: 'Invalid name' };
  } else if (recipient.recipientName.length > 80) {
    return { isValid: false, error: 'Name is 80 characters maximum' };
  } else if (!isValidAddress(recipient.recipientAddress)) {
    return { isValid: false, error: 'Invalid address'};
  } else if (recipient.recipientAddress.length > 120) {
    return { isValid: false, error: 'Address in 120 characters maximum' };
  } else if (!isNumber(recipient.recipientPhone)) {
    return { isValid: false, error: 'Invalid Phone number' };
  }
  return { isValid: true };
};
