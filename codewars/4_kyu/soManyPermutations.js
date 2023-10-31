function permutations(string) {
  const arr = string.split("");

  function getPermutations(arr, n) {
    if (n === 1) {
      return arr.map((el) => [el]);
    }

    let result = [];

    arr.forEach((item, idx, arr) => {
      const rest = arr.filter((_, index) => index !== idx);
      const perms = getPermutations(rest, n - 1);
      const combine = perms.map((v) => [item, ...v]);
      result.push(...combine);
    });

    return result;
  }

  const results = getPermutations(arr, arr.length);
  const answer = [];

  for (const result of results) {
    const str = result.join("");

    if (!answer.includes(str)) {
      answer.push(str);
    }
  }

  return answer;
}
