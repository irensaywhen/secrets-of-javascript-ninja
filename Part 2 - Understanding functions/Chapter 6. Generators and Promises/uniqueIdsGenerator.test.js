const { IdGenerator } = require('./uniqueIdsGenerator');

test('Ids Generator generating unique values', () => {
  // Creating iterator object
  const idIterator = IdGenerator();

  expect(idIterator.next().value).toBe(1);
  expect(idIterator.next().value).toBe(2);
  expect(idIterator.next().value).toBe(3);
});
