function whatsMyContext() {
  return this;
}

let getMyThis = whatsMyContext;

const ninja = {
  getMyThis: whatsMyContext,
};

const samurai = {
  getMyThis: whatsMyContext,
};

function Ninja() {
  this.skulk = function () {
    // Returns this to test the function
    return this;
  };
}

function Samurai() {
  this.skulk = function () {
    return true;
  };

  return 1;
}

const puppet = {
  rules: false,
};

function Emperor() {
  this.rules = true;
  return puppet;
}

function juggle() {
  var result = 0;
  for (let i = 0; i < arguments.length; i++) {
    result += arguments[i];
  }
  this.result = result;
}

function forEach(list, callback) {
  for (let i = 0; i < list.length; i++) {
    callback.call(list[i], i);
  }
}

module.exports = { ninja, samurai, Ninja, Samurai, Emperor, juggle, forEach };
