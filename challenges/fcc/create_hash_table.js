var called = 0;
var hash = (string) => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function () {
  this.collection = {};

  this.add = function (key, value) {
    let hashedKey = hash(key);

    // collision check
    if (!this.collection[hashedKey]) {
      this.collection[hashedKey] = {};
    }

    this.collection[hashedKey][key] = value;
  };

  this.remove = function (key) {
    let hashedKey = hash(key);

    // collision check
    if (Object.keys(this.collection[hashedKey]).length > 1) {
      delete this.collection[hashedKey][key];
      return;
    }

    delete this.collection[hashedKey];
  };

  this.lookup = function (key) {
    let hashedKey = hash(key);

    return this.collection[hashedKey][key];
  };
};
