const heightChecker = function (heights) {
  const toSort = [...heights];

  sortArray(toSort);

  return compareHeights(heights, toSort);
};

const sortArray = (arr, l = 0, r = arr.length) => {
  if (l < r) {
    let p = partition(arr, l, r);
    sortArray(arr, l, p - 1);
    sortArray(arr, p + 1, r);
  }

  return arr;
};

const partition = (arr, l, r) => {
  let pivot = arr[r];
  let p = r;

  for (let i = l; i < p; i++) {
    if (arr[i] > pivot) {
      arr[p] = arr[i];
      arr[i] = arr[p - 1];
      arr[p - 1] = pivot;
      p--;
      i--;
    }
  }

  return p;
};

const compareHeights = (arrA, arrB) => {
  let changes = 0;

  for (let j = 0; j < arrA.length; j++) {
    if (arrA[j] != arrB[j]) {
      changes++;
    }
  }

  return changes;
};
