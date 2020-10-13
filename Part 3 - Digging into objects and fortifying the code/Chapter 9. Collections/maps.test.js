const { ninjaIslandMap, ninja1, ninja2, ninja3, directory } = require('./maps');

test('Check that mapping is working', () => {
  expect(ninjaIslandMap.get(ninja1).homeIsland).toBe('Honshu');
});

test('Ninja3 is not in map', () => {
  expect(ninjaIslandMap.get(ninja3)).toBeUndefined();
});

test('Map size', () => {
  expect(ninjaIslandMap.size).toBe(2);
});

test('Mapping for ninja1 and ninja2 keys exists', () => {
  expect(ninjaIslandMap.has(ninja1)).toBeTruthy();
  expect(ninjaIslandMap.has(ninja2)).toBeTruthy();
});

test('Deleting item from mapping', () => {
  ninjaIslandMap.delete(ninja1);
  expect(ninjaIslandMap.has(ninja1)).toBeFalsy();
});

test('Deleting all items from mapping', () => {
  ninjaIslandMap.clear();
  expect(ninjaIslandMap.size).toBe(0);
});

test('Iterating over map using for...of loop', () => {
  for (let item of directory) {
    expect(Array.isArray(item)).toBe(true);
  }
});
