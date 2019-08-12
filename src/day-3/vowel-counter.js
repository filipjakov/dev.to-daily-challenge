// https://dev.to/thepracticaldev/daily-challenge-3-vowel-counter-34ni

module.exports = (text) => {
  if (typeof text !== 'string' && !(text instanceof String)) {
    throw new Error('Argument must be of type string');
  }

  const matched = text.match(/[aeiou]/gi);

  return matched ? matched.length : 0;
}