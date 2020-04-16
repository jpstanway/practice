// check if array is sorted
function isSorted(arr) {
  var check = (i) =>
    i == arr.length - 1 ? true : arr[i] > arr[i + 1] ? false : check(i + 1);
  return check(0);
}
// generate a randomly filled array
var array = new Array();
(function createArray(size = 5) {
  array.push(+(Math.random() * 100).toFixed(0));
  return size > 1 ? createArray(size - 1) : undefined;
})(25);
var MinHeap = function () {
  this.heap = [];

  this.insert = function (element) {
    this.heap.push(element);

    let elementIndex = this.heap.length - 1;

    while (true) {
      let parentIndex = Math.floor((elementIndex - 1) / 2);
      let parent = this.heap[parentIndex];

      if (parent && element < parent) {
        // if element has a parent
        // and element is less than its parent
        // perform the swap
        this.heap[parentIndex] = element;
        this.heap[elementIndex] = parent;
        elementIndex = parentIndex;
      } else {
        // otherwise, exit the loop/function
        return this.heap;
      }
    }
  };

  this.remove = function (array = this.heap) {
    // remove the root element (greatest)
    let removed = array.shift();

    // re-sort the heap
    if (array.length > 1) {
      for (let i = 0; i < this.heap.length; i++) {
        let root = array[i];
        let leftChild = array[i * 2];
        let rightChild = array[i * 2 + 1];

        // compare to children
        if (leftChild < root) {
          array[i] = leftChild;
          array[i * 2] = root;
        } else if (rightChild < root) {
          array[i] = rightChild;
          array[i * 2 + 1] = root;
        }
      }
    }

    return removed;
  };

  this.sort = function (array = this.heap, sorted = []) {
    // push the root to the new (sorted) array
    // because it is always the lowest value in the heap
    // then re-sort the heap and repeat until heap length is 0
    if (array.length === 0) {
      return sorted;
    }

    let smallest = this.remove(array);
    sorted.push(smallest);
    this.sort(array, sorted);
  };
};
