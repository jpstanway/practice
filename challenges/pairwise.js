function pairwise(arr, arg) {
  let sumOfIndices = 0;
  const usedIndices = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === arg) {
        // first check if indices have been used already
        if (usedIndices.includes(i) || usedIndices.includes(j) || i === j) {
          continue;
        } else {
          sumOfIndices += i + j;
          usedIndices.push(i, j);
        }
      }
    }
  }
  return sumOfIndices;
}

pairwise([1, 3, 2, 4], 4);
