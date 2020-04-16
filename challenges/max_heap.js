var MaxHeap = function () {
  this.heap = [];

  this.print = function () {
    return this.heap;
  };

  this.insert = function (element) {
    this.heap.push(element);

    let elementIndex = this.heap.indexOf(element);
    let parentIndex = Math.floor((elementIndex - 1) / 2);
    let parent = this.heap[parentIndex];

    if (parent && element > parent) {
      this.heap[parentIndex] = element;
      this.heap[elementIndex] = parent;
    }

    return this.heap;
  };

  this.remove = function () {
    // remove the root element (greatest)
    let removed = this.heap.splice(0, 1);

    // re-sort the heap
    for (let i = 0; i < this.heap.length; i++) {
      let root = this.heap[i];
      let leftChild = this.heap[i * 2];
      let rightChild = this.heap[i * 2 + 1];

      // compare to children
      if (leftChild > root) {
        this.heap[i] = leftChild;
        this.heap[i * 2] = root;
      } else if (rightChild > root) {
        this.heap[i] = rightChild;
        this.heap[i * 2 + 1] = root;
      }
    }

    return removed;
  };
};
