class CircularQueue {
  constructor(size) {
    this.queue = [];
    this.read = 0;
    this.write = 0;
    this.max = size - 1;

    while (size > 0) {
      this.queue.push(null);
      size--;
    }
  }

  print() {
    return this.queue;
  }

  enqueue(item) {
    // Only change code below this line
    // dont allow write head to pass read
    // if there is a value yet to be read
    if (this.write === this.read && this.queue[this.read] != null) {
      return null;
    }

    // place the new item wherever the write head is
    this.queue.splice(this.write, 1, item);
    this.write++;

    // reset write head when it reaches the end
    if (this.write > this.max) {
      this.write = 0;
    }

    return item;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.read === this.write && this.queue[this.read] === null) {
      return null;
    }

    // remove item wherever read head is
    let readItem = this.queue.splice(this.read, 1, null);
    this.read++;

    // reset read head when it reaches the end
    if (this.read > this.max) {
      this.read = 0;
    }

    return readItem[0];
    // Only change code above this line
  }
}
