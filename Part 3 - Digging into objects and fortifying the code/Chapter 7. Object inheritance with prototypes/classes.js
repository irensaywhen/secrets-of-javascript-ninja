class Ninja {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
  swingSword() {
    return true;
  }

  // This method is not accessible from class instances
  static compare(ninja1, ninja2) {
    return ninja1.level - ninja2.level;
  }
}

module.exports = Ninja;
