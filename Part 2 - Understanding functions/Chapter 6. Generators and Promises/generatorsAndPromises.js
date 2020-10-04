const { getJSON } = require('./promises');

asynchronous(function* () {
  console.log('Making generator');
  try {
    const posts = yield getJSON('https://jsonplaceholder.typicode.com/posts');
    console.log(posts);
    const post = yield getJSON('https://jsonplaceholder.typicode.com/posts/1');
    console.log(post);
  } catch (e) {
    // Oh no, something wrong with the json
    console.log(e);
  }
});

// Helper function that will control our generator
function asynchronous(generator) {
  // Creates an iterator through which we'll control the generator
  // This iterator will be used to resume iterator execution
  var iterator = generator();

  // Defines a function that will handle
  // one returned value by a generator
  function handle(iteratorResult) {
    // Stops when the generator has no more results
    if (iteratorResult.done) return;

    const iteratorValue = iteratorResult.value;

    if (iteratorValue instanceof Promise) {
      iteratorValue
        .then(res => handle(iterator.next(res)))
        .catch(err => iterator.throw(err));
    }
  }
  try {
    handle(iterator.next());
  } catch (e) {
    iterator.throw(e);
  }
}
