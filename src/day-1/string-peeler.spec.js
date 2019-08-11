const peeler = require('./string-peeler');

describe('The peeler functionality', () => {
  it('should throw an error if a string is not passed as an argument', () => {
    expect(() => peeler(1)).toThrowError();
    expect(() => peeler({})).toThrowError();
    expect(() => peeler(true)).toThrowError();
  });

  it('should return the same string if its is shortet than 3 charachters', () => {
    const testString = 'aa';
    const testStringObject = new String(testString);

    expect(peeler(testString)).toEqual(testString);
    expect(peeler(testStringObject)).toEqual(testStringObject);
  });

  it('should return a peeled string', () => {
    expect(peeler('12345')).toEqual('234');
  })
});
