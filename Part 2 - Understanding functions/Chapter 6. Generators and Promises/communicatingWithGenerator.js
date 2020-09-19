function* NinjaGenerator(action) {
  // The value of imposter will be determined
  // when the second next statement will be called
  const imposter = yield 'Hattori ' + action;

  yield 'Yoshi ' + imposter + ' ' + action;
}

//const ninjaIterator = NinjaGenerator('skulk');

//console.log(ninjaIterator.next());
//console.log(ninjaIterator.next('Hanzo'));

function* AnotherNinjaGenerator() {
  try {
    yield 'Hattori';
  } catch (e) {
    console.log(e);
  }
}

const anotherNinjaIterator = AnotherNinjaGenerator();

const result1 = anotherNinjaIterator.next();
console.log(result1);
anotherNinjaIterator.throw('Catch this!');
