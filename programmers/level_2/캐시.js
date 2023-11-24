function solution(cacheSize, cities) {
  if (cacheSize === 0) return cities.length * 5;

  for (let i = 0; i < cities.length; i++) {
    cities[i] = cities[i].toLowerCase();
  }

  let answer = 0;
  const cache = [];

  for (let i = 0; i < cities.length; i++) {
    if (cache.includes(cities[i])) {
      answer += 1;
      cache.splice(cache.indexOf(cities[i]), 1);
      cache.push(cities[i]);
    } else {
      answer += 5;
      if (cache.length === cacheSize) {
        cache.shift();
        cache.push(cities[i]);
      } else {
        cache.push(cities[i]);
      }
    }
  }

  return answer;
}
