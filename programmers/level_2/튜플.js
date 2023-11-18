function solution(s) {
  const numbers = s.slice(0, s.length - 2).replaceAll("{", "").split("}");
  const tuples = [];
  const numberMap = {};
  const result = [];

  for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i].split(",").filter((el) => el !== "");
    tuples.push([number.length, number]);
  }

  tuples.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < tuples.length; i++) {
    const tuple = tuples[i][1];

    for (const number of tuple) {
      if (!numberMap[number]) {
        numberMap[number] = 1;
        result.push(Number(number));
      }
    }
  }

  return result;
}
