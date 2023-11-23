function solution(n, t, m, p) {
  let answers = "";
  let result = ""
  let number = 0;

  while (answers.length <= t * m) {
    answers += number.toString(n);
    number += 1;
  }

  answers = answers.toUpperCase();

  let idx = p - 1;

  for (let i = 0; i < t; i++) {
    result += answers[idx];
    idx += m;
  }

  return result;
}
