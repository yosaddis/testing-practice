function reverseString(string) {
  if (string.length === 0) return 0;
  return string.split('').reverse().join('');
}

module.exports = reverseString;
// console.log(reverseString("hello"));