const { createTestScheduler } = require('jest');

const stringLength = (str) => {
  if (str.length > 1 && str.length < 10) {
    return str.length;
  } else if (str.length < 1) {
    throw new Error(
      'The string needs to be at least 1 character long.'
    );
  } else {
    throw new Error('The string cant be longer than 10 characters.');
  }
};
stringLength('hello');

module.exports = stringLength;
