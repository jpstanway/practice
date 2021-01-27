var intersect = function(nums1, nums2) {
  const result = [];
  if (nums1.length === 0 || nums2.length === 0) {
      return result;
  }
  
  const obj1 = createObj(nums1);
  const obj2 = createObj(nums2);
  
  const keys = Object.keys(obj1);
  keys.forEach((key) => {
      if (obj2.hasOwnProperty(key)) {
          let count = 0;
          if (obj1[key] <= obj2[key]) {
              count = obj1[key];
          } else {
              count = obj2[key];
          }
          while (count > 0) {
              result.push(key);
              count--;
          }
      } 
  });
  
  return result;
};

const createObj = (arr) => {
  let obj = {};
  arr.forEach((x) => {
      if (obj[x]) {
          obj[x]++;
      } else {
          obj[x] = 1;
      }
  });
  return obj;
};