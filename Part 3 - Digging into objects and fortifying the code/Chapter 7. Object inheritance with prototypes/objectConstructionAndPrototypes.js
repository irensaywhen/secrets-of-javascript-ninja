function Ninja() {
  Ninja.prototype.swingSword = function () {
    return true;
  };
}

function Ninja2() {
  this.swung = false;
  this.swingSword = function () {
    return !this.swung;
  };

  Ninja2.prototype.swingSword = function () {
    return this.swung;
  };
}

function Ninja3() {
  this.swung = true;
}

module.exports = { Ninja, Ninja2, Ninja3 };
