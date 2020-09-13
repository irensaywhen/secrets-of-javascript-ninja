const firstConst = 'samurai';
const secondConst = {};

const { reportActivity, reportActivityWithLet } = require('./typesOfVariables');

test('Testing that const variables are not mutable', () => {
  expect(firstConst).toBe('samurai');
  try {
    firstConst = 'ninja';
  } catch (e) {
    expect(typeof e).toBe('object');
  }
});

test('Can assign properties to const objects', () => {
  secondConst.weapon = 'wakizashi';
  expect(secondConst.weapon).toBe('wakizashi');
});

test('Var behavior', () => {
  let { i, forMessage } = reportActivity();

  expect(typeof i).toBe('number');
  expect(forMessage).toBe('Yoshi jumping');
});

test('Let and const behavior', () => {
  let i, forMessage;

  try {
    ({ i, forMessage } = reportActivityWithLet());
  } catch (e) {}

  expect(i).toBeUndefined();
  expect(forMessage).toBeUndefined();
});
