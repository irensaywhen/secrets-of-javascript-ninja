const { sum } = require('./exercises.js');

test('Sum function', () => {
  expect(sum(1, 2, 3)).toBe(6);
  expect(sum(1, 2, 3, 4)).toBe(10);
});
