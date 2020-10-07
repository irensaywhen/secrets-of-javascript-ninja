// This is our target object
const emperor = { name: 'Komei' };

// Proxy constructor takes the object it wraps and the object with traps
const representative = new Proxy(emperor, {
  // Will be called when reading properties
  get: (target, key) => {
    console.log(`Reading ${key} through a proxy`);
    return key in target ? target[key] : "Don't bother the emperor!";
  },

  // Will be called when writing properties
  set: (target, key, value) => {
    console.log(`Writing ${key} through a proxy`);
    target[key] = value;
  },
});

console.log(representative.name);
console.log(representative.age);
representative.age = 80;

module.exports = { emperor, representative };
