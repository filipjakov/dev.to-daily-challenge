const diamond = require('./diamond');

describe('The diamond functionality', () => {
  it('should return null if an uneven positive integer is not passed as argument', () => {
    expect(diamond()).toBeNull();
    expect(diamond({})).toBeNull();
    expect(diamond(0)).toBeNull();
    expect(diamond(-2)).toBeNull();
    expect(diamond(2)).toBeNull();
  });

  it('should create a diamond', () => {
    expect(diamond(1)).toEqual('*');
    expect(diamond(3)).toEqual(' * \n***\n * ');
    expect(diamond(11)).toEqual('     *     \n    ***    \n   *****   \n  *******  \n ********* \n***********\n ********* \n  *******  \n   *****   \n    ***    \n     *     ');
  })
});
