const store = {
  nextId: 1,
  cache: {},
  add: function (fn) {
    if (!fn.id) {
      fn.id = this.nextId++;
      this.cache[fn.id] = fn;
      return true;
    }
  },
};

function ninja() {}

function isPrime(value) {
  if (!isPrime.answers) {
    // Create cache
    isPrime.answers = {};
  }

  if (isPrime.answers[value] !== undefined) {
    // Return the previously cached value if exists
    return isPrime.answers[value];
  }

  let prime = value !== 1;
  for (let i = 2; i < value; i++) {
    if (value % i === 0) {
      prime = false;
      break;
    }
  }

  // Return the answer and cache it
  return (isPrime.answers[value] = prime);
}

module.exports = { ninja, store, isPrime };
