const { shogun } = require('./definingComputedProperties');

test('Setter is working for computed property', () => {
  shogun.fullTitle = 'Name Title';
  expect(shogun.name).toBe('Name');
  expect(shogun.clan).toBe('Title');
});
