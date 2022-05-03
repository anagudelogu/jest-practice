const stringLength = require('../js/test1');

test('Returns an integer', () => {
  expect(stringLength('hello')).toBe(5);
});

test('Is at least one char long', () => {
  expect(() => stringLength('')).toThrow(
    'The string needs to be at least 1 character long.'
  );
});

test('Is maximum 10 chars long', () => {
  expect(() =>
    stringLength('reallylongstring').toThrow(
      'The string cant be longer than 10 characters.'
    )
  );
});
