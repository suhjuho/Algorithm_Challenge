function dsMultofPfs(n1, n2) {
  let result = [];

  for (let i = n1; i <= n2; i++) {
    if (check(i)) {
      result.push(i);
    }
  }

  return result;

  function check(n) {
    let num = n;
    let primeSum = 0;
    let divisorSum = 0;
    let prime = 2;

    while (prime <= num) {
      if (num % prime !== 0) {
        prime += 1;
      } else {
        primeSum += prime;
        num = num / prime;
      }
    }

    for (let i = 1; i * i <= n; i++) {
      if (i * i === n) {
        divisorSum += i;
      } else if (n % i === 0) {
        divisorSum += i;
        divisorSum += n / i;
      }
    }

    return (divisorSum % primeSum === 0);
  }
}
