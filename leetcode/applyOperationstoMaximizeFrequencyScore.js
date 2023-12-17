// #2968
const maxFrequencyScore = function (nums, k) {
  const numbers = Array.from(new Set(nums));
  const frequencies = [];

  numbers.forEach((number) => {
    const numList = nums.map((num) => Math.abs(num - number)).sort((a, b) => a - b);
    let change = 0;

    for (let i = 0; i < numList.length; i++) {
      change += numList[i];
      if (change > k) {
        break;
      }
      numList[i] = 0;
    }

    frequencies.push(numList.filter((num) => num === 0).length);
  });

  return Math.max(...frequencies);
};
