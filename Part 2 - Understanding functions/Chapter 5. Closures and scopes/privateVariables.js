// Mimicking private variables
function Ninja() {
  // This variable isn't accessible from outside code
  let feints = 0;

  // Accessor method for feints counter
  this.getFeints = function () {
    return feints;
  };
  this.feint = function () {
    feints++;
  };
}

module.exports = { Ninja };
