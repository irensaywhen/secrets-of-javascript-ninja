const { sum } = require('./implicitFunctinParameters.js');

test('Sum of 1 and 2 is 3', () => {
  expect(sum(1, 2)).toBe(3);
});
