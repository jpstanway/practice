var sortedSquares = function (A) {
  for (let k = 0; k < A.length; k++) {
    A[k] *= A[k];
  }

  return mergeSort(A);
};

const mergeSort = (arr, start = 0, end = arr.length - 1) => {
  if (start < end) {
    let splitIndex = Math.floor((start + end) / 2);
    mergeSort(arr, start, splitIndex);
    mergeSort(arr, splitIndex + 1, end);
    merge(arr, start, splitIndex, end);
  }

  return arr;
};

const merge = (arr, start, split, end) => {
  const arrA = [],
    arrB = [];
  let i,
    j,
    s = start;

  for (i = 0; s <= split; i++, s++) {
    arrA[i] = arr[s];
  }

  for (j = 0; s <= end; j++, s++) {
    arrB[j] = arr[s];
  }

  s = start;
  i = 0;
  j = 0;

  while (i < arrA.length && j < arrB.length) {
    if (arrA[i] < arrB[j]) {
      arr[s] = arrA[i];
      i++;
    } else {
      arr[s] = arrB[j];
      j++;
    }
    s++;
  }

  while (i < arrA.length) {
    arr[s] = arrA[i];
    i++;
    s++;
  }

  while (j < arrB.length) {
    arr[s] = arrB[j];
    j++;
    s++;
  }
};
