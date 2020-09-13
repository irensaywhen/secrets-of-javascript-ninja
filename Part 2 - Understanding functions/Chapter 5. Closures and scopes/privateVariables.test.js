const { Ninja } = require('./privateVariables');

test('Access to private variable', () => {
  const ninja1 = new Ninja();
  ninja1.feint();

  expect(ninja1.feints).toBeUndefined();
  expect(ninja1.getFeints()).toBe(1);

  const ninja2 = new Ninja();
  expect(ninja2.getFeints()).toBe(0);
});
