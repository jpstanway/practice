function updateInventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  const inventory = arr1.map(item => item[1]);

  for (let i = 0; i < arr2.length; i++) {
    // search for item in current inventory
    let itemIndex = inventory.indexOf(arr2[i][1]);

    if (itemIndex === -1) {
      // if it doesn't exist, add it
      arr1.push(arr2[i]);
    } else {
      // if it does, increase quantity
      arr1[itemIndex][0] += arr2[i][0];
    }
  }

  // sort inventory alphabetically
  arr1.sort((a, b) => a[1].localeCompare(b[1]));

  return arr1;
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
