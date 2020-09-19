const WeaponGenerator = require('./generators');

// As we call generator, a new iterator is created
// The iterator is used to control the executon of the generator
const weaponsIterator = WeaponGenerator();

test('Testing the first generator', () => {
  for (let weapon of WeaponGenerator()) {
    expect(weapon).toBeDefined();
  }
});

test('Controlling a generator on the first step', () => {
  let result1 = weaponsIterator.next();
  expect(typeof result1).toBe('object');
  expect(result1.value).toBe('Katana');
  expect(!result1.done).toBeTruthy();
});

test('Controlling generator on the second step', () => {
  let result2 = weaponsIterator.next();

  expect(typeof result2).toBe('object');
  expect(result2.value).toBe('Wakizashi');
  expect(result2.done).toBeFalsy();
});

test('Controlling generator on the third step', () => {
  let result3 = weaponsIterator.next();

  expect(typeof result3).toBe('object');
  expect(result3.value).toBeUndefined();
  expect(result3.done).toBeTruthy();
});

test('Using while loop with generator', () => {
  // Create iterator object
  const newWeaponsIterator = WeaponGenerator();
  let item;
  // Go into next iteration if the generator hasn't finished its work
  while (!(item = newWeaponsIterator.next()).done) {
    expect(item).toBeTruthy();
  }
});
