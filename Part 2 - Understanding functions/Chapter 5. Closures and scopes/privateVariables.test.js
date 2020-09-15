const { Ninja } = require('./privateVariables');

test('Access to private variable', () => {
  const ninja1 = new Ninja();
  ninja1.feint();

  expect(ninja1.feints).toBeUndefined();
  expect(ninja1.getFeints()).toBe(1);

  const ninja2 = new Ninja();
  // ninja2 object has its owns feints variable
  expect(ninja2.getFeints()).toBe(0);
});

test('Private variables caveat', () => {
  const ninja1 = new Ninja();
  ninja1.feint();

  let imposter = {};
  // Makes the getFeints function of ninja1
  // accessible through the imposter
  imposter.getFeints = ninja1.getFeints;

  expect(imposter.getFeints()).toBe(1);
});
