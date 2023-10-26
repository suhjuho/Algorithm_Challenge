var splitInteger = function (num, parts) {
  const result = [];
  let remain = num;
  let remainCount = parts

  for (let i = 0; i < parts; i++) {
    const part = Math.floor(remain / remainCount);
    result.push(part);

    remain -= part;
    remainCount -= 1;
  }

  return result;
}
