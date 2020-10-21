const { FakeSet } = require('./sets');

const ninjas = new FakeSet();
ninjas.add('Hattori');
ninjas.add('Hattori');

test('Hattori was added only once, and then was removed', () => {
  expect(ninjas.has('Hattori')).toBe(true);
  expect(ninjas.length).toBe(1);

  ninjas.remove('Hattori');

  expect(ninjas.length).toBe(0);
});

// Real sets
// Creating a set

test('Items are unique in sets', () => {
  const ninjas2 = new Set(['Kuma', 'Hattori', 'Yagyu', 'Hattori']);
  expect(ninjas2.size).toBe(3);
  expect(ninjas2.has('Yoshi')).toBe(false);

  ninjas2.add('Yoshi');
  expect(ninjas2.size).toBe(4);
});
