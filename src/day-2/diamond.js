// https://dev.to/thepracticaldev/daily-challenge-2-string-diamond-21n2

module.exports = (width) => {
  if (!width || typeof width !== 'number' || width < 0 || width % 2 === 0) {
    return null;
  }

  const diamond = [];
  const halfWidth = Math.floor(width / 2);

  for (let i = 0; i <= halfWidth; i++) {
    const lineFirstHalf = ' '.repeat(halfWidth - i) + '*'.repeat(i + 1);
    // It's mirror-simetric to the firt half, doesnt't need the first character
    // etc -> firstHalf = __** ; secondHalf = (*)*__
    const lineSecondHalf = lineFirstHalf.split('').reverse().slice(1).join('')
    diamond.push(lineFirstHalf.concat(lineSecondHalf));
  }

  return diamond.concat(diamond.slice(0, halfWidth).reverse()).join('\n');
}
