const data = require('./callbacks.js');

test('Testing how callback is called', () => {
  // expect is where you put your function you want to test
  // toBe is a matcher
  expect(data.useless(() => data.text)).toBe(data.text);
});
