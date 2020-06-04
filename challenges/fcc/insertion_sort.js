function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    // select the second element
    // compare element to first
    if (array[i] < array[i - 1]) {
      // shift over left value and keep checking
      let selected = array[i];

      for (let j = i - 1; j >= 0; j--) {
        if (array[j] > selected) {
          array[j + 1] = array[j];
        } else {
          array[j + 1] = selected;
          break;
        }
      }
    }
  }

  return array;
}

insertionSort([
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
