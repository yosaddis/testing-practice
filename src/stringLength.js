function stringLength(str) {
  if (str.length < 2 || str.length > 10) return 'string is not the right size';
  return str.length;
}
module.exports = stringLength;