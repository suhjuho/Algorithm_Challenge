function moveZeros(arr) {
  const result = [];
  let countZero = 0;

  for (const item of arr) {
    if (item === 0) {
      countZero++;
    } else {
      result.push(item);
    }
  }

  for (let i = 0; i < countZero; i++) {
    result.push(0);
  }

  return result;
}