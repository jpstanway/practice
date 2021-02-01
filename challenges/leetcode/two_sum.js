var twoSum = function(nums, target) {
  if (nums.length === 2) return [0, 1];
  
  let obj = {};
  let res = [];
  
  for (let i = 0; i < nums.length; i++) {
      obj[nums[i]] = i;
  }
  
  for (let j = 0; j < nums.length; j++) {
      let rem = target - nums[j];
      
      if (obj[rem] && obj[rem] !== j) {
          res = [j, obj[rem]];
      }
  }
  
  return res;
};