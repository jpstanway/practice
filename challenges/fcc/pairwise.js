function pairwise(arr, arg) {
  let sumOfIndices = 0;
  const items = {};

  for (let i = 0; i < arr.length; i++) {
    let newItem = { indices: [i], used: false };
    let diff = arg - arr[i];

    // if difference exists, add up indices
    if (items[diff] && !items[diff].used) {
      sumOfIndices += i + items[diff].indices[0];
      items[diff].indices.shift();

      // when item has no more indices, set used to true
      if (items[diff].indices.length === 0) {
        items[diff].used = true;
      }
      newItem.used = true;
    }

    // if item already exists, add to indices array
    if (items[arr[i]]) {
      items[arr[i]].indices.push(i);
    } else {
      items[arr[i]] = newItem;
    }
  }
  return sumOfIndices;
}

pairwise([1, 4, 2, 3, 0, 5], 7);
