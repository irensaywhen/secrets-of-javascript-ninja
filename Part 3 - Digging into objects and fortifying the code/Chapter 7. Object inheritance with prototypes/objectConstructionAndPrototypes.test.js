const { Ninja, Ninja2, Ninja3 } = require('./objectConstructionAndPrototypes');

test('Prototype property is accessed through instance', () => {
  let ninja = new Ninja();

  expect(ninja.swingSword()).toBe(true);
});

test('Prototype property has a reference to the constructor', () => {
  expect(Ninja.prototype.constructor).toBe(Ninja);
});

test('Type checking', () => {
  let ninja = new Ninja();

  expect(typeof ninja).toBe('object');
  expect(ninja instanceof Ninja).toBe(true);
  expect(ninja.constructor).toBe(Ninja);
});

test('Prototype property is accessed through instance', () => {
  let ninja = new Ninja2();

  expect(ninja.swingSword()).toBe(true);
});

test('Dinamically changing prototype', () => {
  Ninja3.prototype.swingSword = function () {
    return this.swung;
  };

  const ninja = new Ninja3();

  expect(ninja.swingSword()).toBe(true);

  Ninja3.prototype = {
    pierce: function () {
      return true;
    },
  };

  // The first ninja is referencing the first prototype
  expect(ninja.swingSword()).toBe(true);

  const anotherNinja = new Ninja3();
  expect(anotherNinja.pierce()).toBe(true);
  expect(anotherNinja.swingSword).toBeUndefined();
});
