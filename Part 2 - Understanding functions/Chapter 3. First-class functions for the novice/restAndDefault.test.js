const multiMax = require('./restAndDefault.js');

test('To have 9 in the result', () => {
  expect(multiMax(3, 1, 2, 3)).toBe(9);
});
