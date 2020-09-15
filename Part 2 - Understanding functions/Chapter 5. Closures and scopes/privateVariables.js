// Mimicking private variables
function Ninja() {
  // This variable isn't accessible from outside code
  // Because its scope is limited to inside the constructor
  let feints = 0;

  // As with any other function, the following two functions
  // Keep  a refernce to the environment
  // in which they were creared
  // Accessor method for feints counter
  this.getFeints = function () {
    return feints;
  };
  // Increment method for the value
  this.feint = function () {
    feints++;
  };
}

module.exports = { Ninja };
