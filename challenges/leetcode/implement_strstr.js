var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  if (needle.length > haystack.length) return -1;
  
  let check = false;
  let start = -1;
  let j = 0;
  
  for (let i = 0; i < haystack.length; i++) {
      if (!check && haystack[i] === needle[j]) {
          check = true;
          start = i;
      }
      
      if (check && haystack[i] !== needle[j]) {
          check = false;
          
          if (j === needle.length) {
              break;
          }
          
          i = start;
          j = 0;
          start = -1;
      }
      
      if (check) j++;
  }
  
  return j === needle.length ? start : -1;
};