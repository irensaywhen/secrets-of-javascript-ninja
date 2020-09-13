console.assert(
  typeof fun === 'function',
  'Something wrong with function declaration'
);
console.assert(
  typeof myFunExpr === 'undefined',
  'Something wrong with function expression'
);
console.assert(
  typeof myArrowFunc === 'undefined',
  'Something wrong with arrow function expression'
);

var fun = 3;
console.assert(typeof fun === 'number', 'Reassignment did not occur');

// During program execution function declarations are skipped
// so definition of the fun function doesn't have any impact
// on the value of the fun identifier
function fun() {}

console.assert(typeof fun === 'number', 'Reassignment did not occur');
var myFunExpr = function () {};
var myArrowFunc = x => x;
