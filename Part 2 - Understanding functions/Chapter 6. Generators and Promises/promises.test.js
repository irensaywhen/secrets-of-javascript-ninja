const { ninjaPromise, ninjaDelayedPromise, getJSON } = require('./promises');

// Promise
test('Ninja name should be Hattori', () => {
  // Verifies that a certain number of assertions will be called
  expect.assertions(1);

  // We need to return function, or the test will be completed before the returned result
  return ninjaPromise.then(data => {
    expect(data).toEqual('Hattori');
  });
});

test('Resolved promise after a delay has a value', done => {
  ninjaDelayedPromise.then(data => {
    expect(data).toEqual('Hattori');
    done();
  });
});

test('Get JSON function', () => {
  expect.assertions(1);
  return getJSON('https://jsonplaceholder.typicode.com/todos/1').then(
    response => {
      expect(response.id).toBe(1);
    }
  );
});

test('Promise.all', () => {
  expect.assertions(1);
  return Promise.all([
    getJSON('https://jsonplaceholder.typicode.com/todos/1'),
    getJSON('https://jsonplaceholder.typicode.com/todos/2'),
  ]).then(results => {
    expect(results[0].id).toBe(1);
  });
});
