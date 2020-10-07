function isPrime(number) {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) return false;
  }

  return true;
}

isPrime = new Proxy(isPrime, {
  // Apply trap is called whenever a proxy is called as a function
  apply: (target, thisArg, args) => {
    // Start timer with 'isPrime' identifier
    console.time('isPrime');

    const result = target.apply(thisArg, args);

    // Stop the timer
    console.timeEnd('isPrime');
    return result;
  },
});

isPrime(1299827);
