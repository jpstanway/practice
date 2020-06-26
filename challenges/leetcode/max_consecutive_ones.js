var findMaxConsecutiveOnes = function (nums) {
  let max = 0;
  let counter = 0;

  nums.forEach((num) => {
    if (num === 1) {
      counter++;

      if (counter > max) {
        max = counter;
      }
    } else {
      counter = 0;
    }
  });

  return max;
};
const input = [1, 1, 0, 1, 1, 1];
console.log(findMaxConsecutiveOnes(input));
