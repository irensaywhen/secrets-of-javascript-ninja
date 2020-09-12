const { ninja, store, isPrime } = require('./functionsAsObjects');

test('Test that the first time function was added', () => {
  expect(store.add(ninja)).toBeTruthy();
});

test('Test that the first time function was added', () => {
  expect(store.add(ninja)).toBeFalsy();
});

test('To 1 is not prime', () => {
  expect(isPrime(1)).toBeFalsy();
});

test('To 5 is  prime', () => {
  expect(isPrime(5)).toBeTruthy();
});
