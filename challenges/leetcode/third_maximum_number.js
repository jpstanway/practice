var thirdMax = function (nums) {
  const maximums = {};
  let keys;

  for (let i = 0; i < nums.length; i++) {
    if (!maximums[nums[i]]) {
      maximums[nums[i]] = true;
    }
  }

  keys = Object.keys(maximums).sort((a, b) => a - b);

  return keys.length >= 3 ? keys[keys.length - 3] : Math.max(...nums);
};
