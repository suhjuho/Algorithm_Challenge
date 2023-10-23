function solve(s) {
  const gather = "aeiou";
  let answer = 0;
  let result = 0;

  for (let i = 0; i <= s.length; i++) {
    if (gather.includes(s[i]) || i === s.length) {
      answer = Math.max(answer, result);
      result = 0;
    } else {
      result += s.charCodeAt(i) - 96;
    }
  }

  return answer;
};