// A simple closure
let outerValue = 'samurai',
  later;

function outerFunction() {
  let innerValue = 'ninja';

  function innerFunction() {
    console.log("We're in the inner function!");
    console.assert(outerValue === 'samurai');
    console.assert(innerValue === 'ninja');
  }

  later = innerFunction;
}

outerFunction();

// innerFunction has access to the original scope
// in which it was declared through closure
later();
