// # 2967
const minimumCost = function (nums) {
  const totalCosts = [0, 0];
  const numbers = nums.sort((a, b) => a - b);
  let palindromicGreaterNumber = numbers[Math.floor(numbers.length / 2)];
  let palindromicSmallerNumber = numbers[Math.floor(numbers.length / 2)] + 1;

  while (!isPalindromic(++palindromicGreaterNumber)) { }
  while (!isPalindromic(--palindromicSmallerNumber)) { }

  nums.forEach((num) => totalCosts[0] += Math.abs(num - palindromicGreaterNumber));
  nums.forEach((num) => totalCosts[1] += Math.abs(num - palindromicSmallerNumber));

  return Math.min(...totalCosts);
};

function isPalindromic(num) {
  const numList = num.toString().split("");

  for (let i = 0; i <= Math.floor(numList.length / 2); i++) {
    if (numList[i] !== numList[numList.length - 1 - i]) {
      return false;
    }
  }

  return true;
}
