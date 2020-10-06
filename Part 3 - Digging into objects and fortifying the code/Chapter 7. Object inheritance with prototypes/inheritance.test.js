const { Ninja, Person } = require('./inheritance');

test('Ninja is a person', () => {
  expect(new Ninja() instanceof Person).toBe(true);
});

test('How instanceof operator works', () => {
  let ninja = new Ninja();
  expect(ninja instanceof Ninja).toBe(true);

  Ninja.prototype = {};

  expect(ninja instanceof Ninja).toBe(false);
});
