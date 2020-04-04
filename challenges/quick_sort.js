function quickSort(array, l = 0, r = array.length - 1) {
  // change code below this line
  if (l < r) {
    let pos = partition(array, l, r);
    // recursive calls
    quickSort(array, l, pos - 1);
    quickSort(array, pos + 1, r);
  }
  console.log(array);
  // change code above this line
  return array;
}

function partition(array, l, r) {
  // partition function (returns pivot)
  let pivot = array[r];
  let pos = r;

  for (let i = l; i < pos; i++) {
    if (array[i] > pivot) {
      array[pos] = array[i];
      array[i] = array[pos - 1];
      array[pos - 1] = pivot;

      pos--;
      i--;
    }
  }
  return pos;
}

quickSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
