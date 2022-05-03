const capitalize = require('../js/test4.js');

test('Returns string capitalized.', () => {
  expect(capitalize('hello')).toBe('Hello');
});
