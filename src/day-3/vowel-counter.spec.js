const vowelCounter = require('./vowel-counter');

describe('Vowel counter funcionality', () => {
  it('should throw an error if argument of type string is not provided', () => {
    expect(() => vowelCounter()).toThrowError();
    expect(() => vowelCounter({})).toThrowError();
    expect(() => vowelCounter(12)).toThrowError();
    expect(() => vowelCounter([])).toThrowError();
  });

  it('should return the correct number of vowels', () => {
    expect(vowelCounter('abcdefg')).toEqual(2);
    expect(vowelCounter('ghjlk')).toEqual(0);
  });
});