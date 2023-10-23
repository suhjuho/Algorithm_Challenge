function sumPowDigSeq(start, n, k) {
  const sequence = [start];
  const history = { start: 0 };
  let digit = String(start);
  let isCycle = false;
  let patt_len = 0;
  let patt_start = 0;

  for (let i = 1; i <= k; i++) {
    let result = 0;

    for (let j = 0; j < digit.length; j++) {
      result += Number(digit[j]) ** n;
    }

    sequence.push(result);

    if (history[result] && !isCycle) {
      isCycle = true;
      patt_start = i;
      patt_len = i - history[result];
      history[result] = i;
    } else {
      history[result] = i;
    }

    digit = String(result);
  }

  return [patt_start - patt_len, sequence.slice(patt_start, patt_start + patt_len), patt_len, sequence.at(-1)];
}