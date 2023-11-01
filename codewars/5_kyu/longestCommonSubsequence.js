function LCS(x, y) {
  let resultsX = [];
  let results = [];
  const result = [];
  const length = Math.min(x.length, y.length);

  function subSequence(arr, len, start) {
    if (len === 0) {
      results.push(result.join(""));
      return;
    }

    for (let i = start; i < arr.length; i++) {
      result.push(arr[i]);
      subSequence(arr, len - 1, i + 1);
      result.pop();
    }
  }

  for (let i = 1; i <= length; i++) {
    subSequence(x, i, 0);
  }

  resultsX = [...results];
  results = [];

  for (let i = 1; i <= length; i++) {
    subSequence(y, i, 0);
  }

  for (let i = results.length - 1; i >= 0; i--) {
    if (resultsX.includes(results[i])) {
      return results[i];
    }
  }

  return "";
}