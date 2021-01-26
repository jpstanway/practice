var rotate = function(nums, k) {
  if (k === 0 || nums.length < 2) {
      return;
  }
  
  const copy = [...nums];
  
  for (let i = 0; i < copy.length; i++) {
      let j = i + k;
      
      while (j >= copy.length) {
          j -= copy.length;
      }
      
      nums[j] = copy[i];
  }
};