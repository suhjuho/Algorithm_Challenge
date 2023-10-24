var uniqueInOrder = function (iterable) {
  const result = [];

  for (const letter of iterable) {
    if (result.length === 0) {
      result.push(letter);
      continue;
    }

    if (result[result.length - 1] !== letter) {
      result.push(letter);
    }
  }

  return result;
}