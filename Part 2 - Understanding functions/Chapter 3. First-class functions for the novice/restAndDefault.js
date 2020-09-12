function multiMax(first, ...remainingNumbers) {
  let sorted = remainingNumbers.sort((a, b) => b - a);
  return first * sorted[0];
}

module.exports = multiMax;
