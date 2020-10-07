const createNegativeArrayProxy = require('./proxiesForNegativeArrayIndexes');

let ninjas = ['Yoshi', 'Kuma', 'Hattori'];

ninjas = createNegativeArrayProxy(ninjas);

test('Normal access is working', () => {
  expect(ninjas[0]).toBe('Yoshi');
  expect(ninjas[1]).toBe('Kuma');
  expect(ninjas[2]).toBe('Hattori');
});

test('Reverse access is working', () => {
  expect(ninjas[-1]).toBe('Hattori');
  expect(ninjas[-2]).toBe('Kuma');
  expect(ninjas[-3]).toBe('Yoshi');
});
