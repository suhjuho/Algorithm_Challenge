function nextBigger(n) {
  let number = n.toString().split("").map(Number);
  let backIndex;
  let changeIndex;

  for (let i = number.length - 2; i >= 0; i--) {
    if (number[i] < number[i + 1]) {
      changeIndex = i;
      break;
    }
  }

  if (changeIndex === undefined) {
    return -1;
  }

  for (let i = number.length - 1; i >= 0; i--) {
    if (number[changeIndex] < number[i]) {
      backIndex = i;
      break;
    }
  }

  [number[changeIndex], number[backIndex]] = [number[backIndex], number[changeIndex]];

  number = number.slice(0, changeIndex + 1).concat(number.slice(changeIndex + 1).sort());

  return Number(number.join(""));
}
