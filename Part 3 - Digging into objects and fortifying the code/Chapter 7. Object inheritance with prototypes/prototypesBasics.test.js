let { yoshi, hattori, kuma } = require('./prototypesBasics');

test('Skulk in yoshi', () => {
  expect('skulk' in yoshi).toBe(true);
});

test('Yoshi cannot sneak', () => {
  expect('sneak' in yoshi).not.toBe(true);
});

test('Yoshi cannot creep', () => {
  expect('creep' in yoshi).not.toBe(true);
});

test('Yoshi now inherits property from hattori', () => {
  Object.setPrototypeOf(yoshi, hattori);
  expect('sneak' in yoshi).toBe(true);
});

test('Hattori now inherits property from kuma', () => {
  Object.setPrototypeOf(hattori, kuma);
  expect('creep' in yoshi).toBe(true);
  expect('creep' in hattori).toBe(true);
});
