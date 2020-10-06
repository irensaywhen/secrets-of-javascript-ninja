const Ninja = require('./classes');

test('Testing basic class', () => {
  let ninja = new Ninja('Yoshi');
  expect(ninja instanceof Ninja).toBe(true);
});

test('Static method', () => {
  const ninja1 = new Ninja('Yoshi', 4);
  const ninja2 = new Ninja('Hattori', 3);

  expect('compare' in ninja1).toBe(false);
  expect(Ninja.compare(ninja1, ninja2)).toBeGreaterThan(0);
  expect(ninja1.swingSword).toEqual(ninja2.swingSword);
});
