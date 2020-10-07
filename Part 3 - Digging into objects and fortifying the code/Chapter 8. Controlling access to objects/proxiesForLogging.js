// Function that takes a target and makes it loggable
function makeLoggable(target) {
  return new Proxy(target, {
    get: (target, property) => {
      console.log(`Reading ${property}`);
      return target[property];
    },

    set: (target, property, value) => {
      console.log(`Writing ${value} to ${property}`);
      target[property] = value;
    },
  });
}

module.exports = makeLoggable;
