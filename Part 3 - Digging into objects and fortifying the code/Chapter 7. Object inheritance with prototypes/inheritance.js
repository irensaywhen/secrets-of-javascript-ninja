function Ninja() {}

function Person() {}
Person.prototype.dance = function () {
  console.log('Dancing!');
};

// Making Ninja a person
Ninja.prototype = new Person();

// By making constructor property not enumerable,
// We hide it when iterating using for-in loop
Object.defineProperty(Ninja.prototype, 'constructor', {
  enumerable: false,
  value: Ninja,
  writable: true,
});

let ninja = new Ninja();

for (let prop in ninja) {
  console.log(`Enumerable property: ${prop}`);
}

module.exports = { Ninja, Person };
