var duplicateZeros = function (arr) {
  const originalLength = arr.length;
  const queue = [];
  const firstZeroIndex = arr.indexOf(0);

  for (let i = 0; i < arr.length; i++) {
    queue.push(arr[i]);

    if (arr[i] == 0) {
      queue.push(0);
    }

    arr[i] = queue.shift();
  }

  arr.slice(originalLength, arr.length);
};
