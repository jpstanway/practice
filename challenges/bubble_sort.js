function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      // compare adjacent items
      // starting at first index
      if (array[j] > array[j + 1]) {
        // swap them if the one on the left
        // is greater than the one on the right
        let swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
  }

  return array;
}

bubbleSort([
  1,
  4,
  2,
  8,
  345,
  123,
  43,
  32,
  5643,
  63,
  123,
  43,
  2,
  55,
  1,
  234,
  92
]);
