function solution(s, skip, index) {
  const results = [];
  const skips = skip.split("").map((el) => el.charCodeAt());

  for (let i = 0; i < s.length; i++) {
    let result = s[i].charCodeAt();
    let count = 0;

    while (count < index) {
      result += 1;
      result = (result > 122) ? result % 123 + 97 : result;
      if (!skips.includes(result)) count++;
    }

    results.push(result);
  }

  return results.map(el => String.fromCharCode(el)).join("");
}
