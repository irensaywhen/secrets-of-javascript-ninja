const {
  Ninja,
  ninjaCollection,
  AdvancedNinja,
} = require('./gettersAndSetters');

test('We have access to private skill level variable', () => {
  const ninja = new Ninja();

  let skillLevel = 100;

  ninja.setSkillLevel(skillLevel);

  expect(ninja.getSkillLevel()).toBe(skillLevel);
});

test('True getters and setters', () => {
  let newFirstNinja = 'Hachi';
  ninjaCollection.firstNinja = newFirstNinja;

  expect(ninjaCollection.firstNinja).toBe(newFirstNinja);
  expect(ninjaCollection.ninjas[0]).toBe(newFirstNinja);
});

test('Getters and setters work in constructor through Object.defineProperty', () => {
  const ninja = new AdvancedNinja();

  expect(ninja._skillLevel).toBeUndefined();
  expect(ninja.skillLevel).toBe(0);
});
