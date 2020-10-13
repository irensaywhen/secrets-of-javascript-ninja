const ninjas = ['Yagyu', 'Kuma', 'Hattori', 'Fuma'];

test('Remove items from array with splice', () => {
  // Remove one element starting at index 1
  let removedItems = ninjas.splice(1, 1);

  expect(removedItems.length).toBe(1);
  expect(removedItems[0]).toBe('Kuma');
});

test('Length of the array reduced after removement', () => {
  expect(ninjas.length).toBe(3);
});

test('Removing and inserting items', () => {
  let removedItems = ninjas.splice(1, 2, 'Mochizuki', 'Yoshi', 'Momochi');
  expect(removedItems.length).toBe(2);
  console.log(ninjas);
});
