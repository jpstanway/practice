class Set {
  constructor() {
    // collection will hold our set
    this.collection = [];
  }
  // this method will check for the presence of an element and return true or false
  has(element) {
    return this.collection.indexOf(element) !== -1;
  }

  values() {
    return this.collection;
  }

  add(element) {
    if (this.collection.indexOf(element) > -1) {
      return false;
    }

    this.collection.push(element);
    return true;
  }

  remove(element) {
    let index = this.collection.indexOf(element);

    // check that element exists
    if (index > -1) {
      this.collection.splice(index, 1);
      return true;
    }

    return false;
  }

  size() {
    return this.collection.length;
  }
}
