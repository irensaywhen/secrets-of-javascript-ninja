const ninja = require('./configuringProperties');

test('New property is defined', () => {
  expect('sneaky' in ninja).toBe(true);
});
