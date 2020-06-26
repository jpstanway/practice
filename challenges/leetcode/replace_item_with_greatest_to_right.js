var replaceElements = function (arr) {
  let item,
    max = -1;

  for (let i = arr.length - 1; i >= 0; i--) {
    item = arr[i];
    arr[i] = max;

    if (i != 0 && item > max) {
      max = item;
    }
  }

  return arr;
};
