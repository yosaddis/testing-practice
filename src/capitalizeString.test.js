const capitalizeString = require('./capitalizeString.js');

describe('Test for the capitalize function functionalities.', () => {
  test('Check if the first charachter is capital letter or not.', () => {
    const checkString = 'ethiopia';
    expect((capitalizeString(checkString)[0]) === (checkString[0].toUpperCase())).toBeTruthy();
  });
});