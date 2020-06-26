var findNumbers = function (nums) {
  let total = 0;

  nums.forEach((num) => {
    let stringify = String(num);

    if (stringify.length % 2 === 0) {
      total++;
    }
  });

  return total;
};

const input = [555, 901, 482, 1771];
console.log(findNumbers(input));
