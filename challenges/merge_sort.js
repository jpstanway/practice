function mergeSort(array, start = 0, end = array.length - 1) {
  // change code below this line
  if (start < end) {
    let splitIndex = Math.floor((start + end) / 2);
    mergeSort(array, start, splitIndex);
    mergeSort(array, splitIndex + 1, end);
    merge(array, start, splitIndex, end);
  }

  // change code above this line
  return array;
}

function merge(array, start, split, end) {
  const arrA = [];
  const arrB = [];
  let s = start;
  let i;
  let j;

  // shove each half of the array
  // into its own subarray
  for (i = 0; s <= split; i++, s++) {
    arrA[i] = array[s];
  }

  for (j = 0; s <= end; j++, s++) {
    arrB[j] = array[s];
  }

  // reset the markers
  s = start;
  i = 0;
  j = 0;

  // compare each item in subarrays
  // and copy back into array based on lowest
  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      array[s] = arrA[i];
      i++;
    } else {
      array[s] = arrB[j];
      j++;
    }
    s++;
  }

  // after one array is completed
  // copy the remaining values back into array
  while (i < arrA.length) {
    array[s] = arrA[i];
    i++;
    s++;
  }

  while (j < arrB.length) {
    array[s] = arrB[j];
    j++;
    s++;
  }
}

mergeSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
