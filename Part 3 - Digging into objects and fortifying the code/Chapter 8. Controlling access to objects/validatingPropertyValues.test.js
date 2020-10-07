const { Ninja } = require('./validatingPropertyValues');

test('Level can be only integer', () => {
  const ninja = new Ninja();

  ninja.skillLevel = 10;
  expect(ninja.skillLevel).toBe(10);

  try {
    ninja.skillLevel = 'Great';
  } catch (error) {
    console.log('Error catched');
    expect(error instanceof TypeError).toBe(true);
  }
});
