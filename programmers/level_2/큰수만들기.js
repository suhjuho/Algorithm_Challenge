function solution(number, k) {
  const stack = [];
  let count = 0;

  for (const item of number) {
    while (count < k && stack[stack.length - 1] < Number(item)) {
      stack.pop();
      count += 1;
    }

    stack.push(item);
  }

  while (count < k) {
    stack.pop();
    count += 1;
  }

  return stack.join("");
}