// Mimicking sets with objects

function FakeSet() {
  this.data = {};
  this.length = 0;
}

FakeSet.prototype.has = function (item) {
  return typeof this.data[item] !== 'undefined';
};

FakeSet.prototype.add = function (item) {
  if (!this.has(item)) {
    this.data[item] = true;
    this.length++;
  }
};

FakeSet.prototype.remove = function (item) {
  if (this.has(item)) {
    delete this.data[item];
    this.length--;
  }
};

module.exports = { FakeSet };
