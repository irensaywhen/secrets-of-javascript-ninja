var ninja = {};
ninja.name = 'Yoshi';
ninja.weapon = 'kusarigama';

Object.defineProperty(ninja, 'sneaky', {
  configurable: false,
  enumerable: false,
  value: true,
  writable: true,
});

for (let prop in ninja) {
  console.log(`Enumerable property: ${prop}`);
}

module.exports = ninja;
