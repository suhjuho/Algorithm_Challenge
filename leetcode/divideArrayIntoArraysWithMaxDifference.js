// #2966
const divideArray = function (nums, k) {
  const numbers = nums.sort((a, b) => a - b);
  const results = [];

  for (let i = 0; i < numbers.length; i += 3) {
    const result = [];

    for (let j = 0; j < 3; j++) {
      result.push(numbers[i + j]);

      if ((result[result.length - 1] - result[0]) > k) {
        return [];
      }
    }

    results.push(result);
  }

  return results;
};
