const findDisappearedNumbers = function (nums) {
  let missing = new Set(nums);

  for (let i = 1; i <= nums.length; i++) {
    if (missing.has(i)) {
      missing.delete(i);
    } else {
      missing.add(i);
    }
  }

  return [...missing];
};
