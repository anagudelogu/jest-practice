const reverseString = require('../js/test2.js');

test('Returns a the reversed string', () => {
  expect(reverseString('hello')).toBe('olleh');
});
