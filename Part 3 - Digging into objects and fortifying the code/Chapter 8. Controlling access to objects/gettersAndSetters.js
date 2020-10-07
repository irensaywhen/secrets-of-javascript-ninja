// Mimicking getters and setters
function Ninja() {
  // Private variable
  let skillLevel;

  this.getSkillLevel = () => {
    console.log('Reading skillLevel property');
    return skillLevel;
  };

  this.setSkillLevel = value => {
    console.log(`Modifying skillLevel property from ${skillLevel} to ${value}`);
    skillLevel = value;
  };
}

// The same with getters and setters
function AdvancedNinja() {
  // Mimicking private property using variable and closure
  let _skillLevel = 0;

  Object.defineProperty(this, 'skillLevel', {
    // Getter and setter creates a closure arund the private variable
    get: () => {
      console.log('Getter is called');
      return _skillLevel;
    },
    set: value => {
      console.log('Setter is called');
      _skillLevel = value;
    },
  });
}

// True getters and setters
const ninjaCollection = {
  ninjas: ['Yoshi', 'Kuma', 'Hattori'],
  get firstNinja() {
    console.log('Getting the first ninja');
    return this.ninjas[0];
  },
  set firstNinja(value) {
    console.log('Setting first ninja');
    this.ninjas[0] = value;
  },
};

module.exports = { Ninja, ninjaCollection, AdvancedNinja };
