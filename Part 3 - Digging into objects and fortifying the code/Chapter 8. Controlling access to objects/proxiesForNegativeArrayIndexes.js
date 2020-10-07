function createNegativeArrayProxy(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Expected an array');
  }

  return new Proxy(array, {
    get: (target, index) => {
      index = +index;

      return target[index < 0 ? target.length + index : index];
    },

    set: (target, index, val) => {
      index = +index;
      return (target[index < 0 ? target.length + index : index] = val);
    },
  });
}

module.exports = createNegativeArrayProxy;
