var removeElement = function (nums, val) {
  let length = 0;
  let count = 0;
  let newLength = 0;

  nums.forEach((num) => {
    length++;

    if (num == val) {
      count++;
    }
  });

  newLength = length - count;

  for (i = 0; i <= newLength - 1; i++) {
    if (nums[i] == val) {
      while (nums[length - 1] == val) {
        length--;
      }

      nums[i] = nums[length - 1];
      length--;
    }
  }

  return newLength;
};
