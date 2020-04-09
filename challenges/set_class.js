function Set() {
  // the var collection will hold the set
  var collection = [];
  // this method will check for the presence of an element and return true or false
  this.has = function (element) {
    return collection.indexOf(element) !== -1;
  };
  // this method will return all the values in the set
  this.values = function () {
    return collection;
  };
  // this method will add an element to the set
  this.add = function (element) {
    if (!this.has(element)) {
      collection.push(element);
      return true;
    }
    return false;
  };
  // this method will remove an element from a set
  this.remove = function (element) {
    if (this.has(element)) {
      var index = collection.indexOf(element);
      collection.splice(index, 1);
      return true;
    }
    return false;
  };
  // this method will return the size of the set
  this.size = function () {
    return collection.length;
  };
  // this method will combine a second set into a new set
  this.union = function (set2) {
    const setUnion = new Set();
    const addElementsToSet = (element) => setUnion.add(element);

    this.values().forEach(addElementsToSet);
    set2.values().forEach(addElementsToSet);
    return setUnion;
  };
}
