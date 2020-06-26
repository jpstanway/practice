var checkIfExist = function (arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let item = arr[i];
    let n = 2 * item;
    let m = item % 2 == 0 ? item / 2 : null;

    if (obj[n] || obj[m]) {
      return true;
    }

    obj[item] = true;
  }

  return false;
};
