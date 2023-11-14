function solution(queue1, queue2) {
  const length = queue1.length;
  let sum1 = queue1.reduce((acc, cur) => acc + cur);
  let sum2 = queue2.reduce((acc, cur) => acc + cur);
  let pointer1 = 0;
  let pointer2 = 0;

  if ((sum1 + sum2) % 2 === 1) {
    return -1;
  }

  for (let i = 0; i < length * 3; i++) {
    if (sum1 === sum2) {
      return i;
    } else if (sum1 > sum2) {
      const num = queue1[pointer1];
      pointer1 += 1;
      queue2.push(num);
      sum1 -= num;
      sum2 += num;
    } else {
      const num = queue2[pointer2];
      pointer2 += 1;
      queue1.push(num);
      sum1 += num;
      sum2 -= num;
    }
  }

  return -1;
}