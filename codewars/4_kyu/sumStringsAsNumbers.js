function sumStrings(a, b) {
  const arrA = a.split("").reverse();
  const arrB = b.split("").reverse();
  const length = Math.max(arrA.length, arrB.length);
  let carry = 0;
  let itemA = 0;
  let itemB = 0;
  let result = "";

  for (let i = 0; i < length; i++) {
    if (i < arrA.length) {
      itemA = Number(arrA[i]);
    } else {
      itemA = 0;
    }

    if (i < arrB.length) {
      itemB = Number(arrB[i]);
    } else {
      itemB = 0;
    }

    result = (itemA + itemB + carry) % 10 + result;
    carry = Math.floor((itemA + itemB + carry) / 10);
  }

  if (carry !== 0) {
    result = carry + result;
  }

  if (result[0] === "0") {
    result = result.slice(1);
  }

  return result;
}
