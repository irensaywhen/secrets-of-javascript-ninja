// We can define a generator by putting * sign
// after the function keyword
function* WeaponGenerator() {
  // Generate new values by putting yield keyword
  yield 'Katana';
  yield 'Wakizashi';
}

function* WarriorGenerator() {
  yield 'Sun Tzu';
  // delegates to another generator
  // All the calls to the warriorIterator will be rerouted to the NinjaGenerator
  yield* NinjaGenerator();
  // THe last value will be yielded only after NinjaGenerator will finish its work
  yield 'Genghis Khan';
}

function* NinjaGenerator() {
  yield 'Hattori';
  yield 'Yoshi';
}

for (let warrior of WarriorGenerator()) {
  console.log(warrior);
}

// For of loop is syntatic sugar for iterating over iterators
// It calls the next method and checks whether the work is done behind the scenes
for (let weapon of WeaponGenerator()) {
  console.log(weapon);
}

module.exports = WeaponGenerator;
