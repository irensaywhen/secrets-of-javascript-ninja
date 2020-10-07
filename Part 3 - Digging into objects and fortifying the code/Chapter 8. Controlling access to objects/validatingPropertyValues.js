// The same with getters and setters
function Ninja() {
  // Mimicking private property using variable and closure
  let _skillLevel = 0;

  Object.defineProperty(this, 'skillLevel', {
    // Getter and setter creates a closure arund the private variable
    get: () => {
      console.log('Getter is called');
      return _skillLevel;
    },
    set: value => {
      if (!Number.isInteger(value)) {
        throw new TypeError('Skill Level should be a number');
      }
      console.log('Setter is called');
      _skillLevel = value;
    },
  });
}

module.exports = { Ninja };
