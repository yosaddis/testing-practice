const stringLength = require('./stringLength.js');

test('The size 3 for a three charachter string.', () => {
  expect(stringLength('AAA')).toBe(3);
});

test('The function throws for wrong size string.', () => {
  expect(stringLength('A')).toBe('string is not the right size');
});