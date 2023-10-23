function solve(a, b) {
  const primes = [];
  const dominantPrimes = [];
  const isprime = new Array(b + 1).fill(true);
  let result = 0;

  for (let i = 2; i <= b; i++) {
    if (isprime[i] === true) {
      primes.push(i);
    }
    let multiple = 2;
    while (multiple * i <= b) {
      isprime[multiple * i] = false;
      multiple += 1;
    }
  }

  for (let i = 0; i < primes.length; i++) {
    if (primes[i] - 1 < primes.length) {
      dominantPrimes.push(primes[primes[i] - 1]);
    }
  }

  for (const dominantPrime of dominantPrimes) {
    if (a <= dominantPrime && dominantPrime <= b) {
      result += dominantPrime
    }
  }

  return result;
}