const makeLoggable = require('./proxiesForLogging');

// Create a target object
let ninja = { name: 'Yoshi' };

ninja = makeLoggable(ninja);

test('Logging is working', () => {
  expect(ninja.name).toBe('Yoshi');
  ninja.weapon = 'sword';
});
