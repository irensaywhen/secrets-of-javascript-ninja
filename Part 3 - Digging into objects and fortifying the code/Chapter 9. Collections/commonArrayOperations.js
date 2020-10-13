const ninjas = [
  { name: 'Yagyu', weapon: 'shuriken' },
  { name: 'Yoshi', weapon: 'katana' },
  { name: 'Kuma', weapon: 'wakizashi' },
];

// Creating new array based on the existing array
const weapons = ninjas.map(ninja => ninja.weapon);
console.log(weapons);

// Test array items

const ninjas2 = [
  { name: 'Yagyu', weapon: 'shuriken' },
  { name: 'Yoshi' },
  { name: 'Kuma', weapon: 'wakizashi' },
];

// The result is true if callback returns true for each array item
const allNinjasAreNamed = ninjas2.every(ninja => 'name' in ninja);
const allNinjasAreArmed = ninjas2.every(ninja => 'weapon' in ninja);
console.log(
  `allNinjasAreNamed: ${allNinjasAreNamed}, allNinjasAreArmed: ${allNinjasAreArmed}`
);

// The result is true if callback returns true for at least one item
const someNinjasAreArmed = ninjas2.some(ninja => 'weapon' in ninja);
console.log(`Some ninjas are armed: ${someNinjasAreArmed}`);

// Searching array
const ninjaWithWakizashi = ninjas.find(ninja => ninja.weapon === 'wakizashi');
console.log(`ninjaWithWakizashi.name: ${ninjaWithWakizashi.name}`);

const ninjaWithBlade = ninjas.find(ninja => ninja.weapon === 'blade');

console.log(`There is a ninja with blade: ${Boolean(ninjaWithBlade)}`);

const armedNinjas = ninjas2.filter(ninja => 'weapon' in ninja);
console.log(armedNinjas);

// Aggregating array items
const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((aggregated, number) => aggregated + number, 0);
console.log(sum);
