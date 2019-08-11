// https://dev.to/thepracticaldev/daily-challenge-1-string-peeler-4nep

module.exports = (string) => {
  if (typeof string !== 'string' && !(string instanceof String)) {
    throw new Error('Argument must be of type string');
  }

  if (string.length <= 2) {
    return string;
  }

  const begin = 1;
  const end = string.length - 2;

  return string.split('').splice(begin, end).join('');
}