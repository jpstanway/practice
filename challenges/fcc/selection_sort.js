function selectionSort(array) {
  for (let i = 0; i < array.length; i++) {
    // store the first index as min value
    // and select the first index to be compared
    let min = i;
    let selected = array[i];
    for (let j = i + 1; j < array.length; j++) {
      // find the next smallest number
      if (array[j] < selected) {
        min = j;
        selected = array[j];
      }
    }
    // then perform the swap
    array[min] = array[i];
    array[i] = selected;
  }

  return array;
}

selectionSort([
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
