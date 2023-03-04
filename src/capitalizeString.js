function capitalizeString(string) {
  const arrayString = string.split('');
  arrayString[0] = arrayString[0].toUpperCase();
  const changedString = arrayString.join('');
  return changedString;
}

module.exports = capitalizeString;