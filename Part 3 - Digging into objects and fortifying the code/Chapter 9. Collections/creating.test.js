const { ninjas, samurai } = require('./creating');

test('Items outside of the array are undefined', () => {
  // This is the consequense of the fact that javascript arrays are objects
  expect(ninjas[ninjas.length + 1]).toBeUndefined();
});

//test('Arrays are automatically expanded', () => {
//  let length = ninjas.length;
//
//  ninjas[ninjas.length + 5] = 'Wow';
//  expect(ninjas.length).toBe(length + 4);
//});

test('Delete operator preserves the length', () => {
  ninjas.length = 3;

  delete ninjas[1];
  expect(ninjas.length).toBe(3);
});
