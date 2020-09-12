const {
  ninja,
  samurai,
  Ninja,
  Samurai,
  Emperor,
  juggle,
  forEach,
} = require('./invokingFunctions');

// Invocation as a function

test('Test ninja method', () => {
  expect(ninja.getMyThis()).toBe(ninja);
});

test('That both ninja and samurai are sharing the same function', () => {
  expect(ninja.getMyThis).toBe(samurai.getMyThis);
});

const ninja1 = new Ninja();

test('Test ninja method', () => {
  expect(ninja1.skulk()).toBe(ninja1);
});

test('Constructor returning primitive without new keyword', () => {
  expect(Samurai()).toBe(1);
});

test('Constructor returning primitive called with new keyword', () => {
  expect(typeof new Samurai()).toBe('object');
});

test('Returning object is not ignored in constructor', () => {
  expect(new Emperor().rules).toBeFalsy();
});

test('Apply is working', () => {
  const ninja = {};

  juggle.apply(ninja, [1, 2, 3]);
  expect(ninja.result).toBe(6);
});

test('Call is working', () => {
  const ninja = {};

  juggle.call(ninja, 1, 2, 3);
  expect(ninja.result).toBe(6);
});

test('Custom forEach function', () => {
  weapons = [{ type: 'shuriken' }, { type: 'katana' }];

  forEach(weapons, function (index) {
    expect(this).toBe(weapons[index]);
  });
});
