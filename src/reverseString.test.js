const reverseString = require('./reverseString.js');

test('If the value first charachter became the last one', () => {
  const orginalString = 'ABCD';
  const reversedString = reverseString(orginalString);
  expect(orginalString[0] === reverseString(reversedString)[0]).toBeTruthy();
});

test('Return 0 if the given string length is zero', () => {
  expect(reverseString('')).toBe(0);
});