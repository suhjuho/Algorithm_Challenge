function total(arr) {
  const length = arr.length;
  const primes = [];
  const isPrime = new Array(length).fill(true);
  let result = 0;

  for (let i = 2; i < length; i++) {
    if (isPrime[i]) {
      primes.push(i);
    }

    let multiple = 2;
    while (multiple * i < length) {
      isPrime[multiple * i] = false;
      multiple += 1;
    }
  }

  for (const prime of primes) {
    result += arr[prime];
  }

  return result;
}
