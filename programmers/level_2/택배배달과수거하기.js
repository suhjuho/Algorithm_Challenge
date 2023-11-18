function solution(cap, n, deliveries, pickups) {
  let answer = 0;
  let leftDeliveries = deliveries.reduce((acc, cur) => acc + cur);
  let leftPickups = pickups.reduce((acc, cur) => acc + cur);
  let load = cap;
  let last = n - 1;

  while (leftDeliveries + leftPickups > 0) {
    for (let house = last; house >= 0; house--) {
      if (!!deliveries[house] || !!pickups[house]) {
        last = house;
        answer += (last + 1) * 2
        break;
      }
    }

    load = cap;

    if (leftDeliveries > 0) {
      for (let house = last; house >= 0; house--) {
        if (load >= deliveries[house]) {
          load = load - deliveries[house];
          deliveries[house] = 0;
        } else if (0 < load && load < deliveries[house]) {
          deliveries[house] = deliveries[house] - load;
          load = 0;
        }

        if (load === 0) break;
      }
    }

    leftDeliveries -= (cap - load);
    load = cap;

    if (leftPickups > 0) {
      for (let house = last; house >= 0; house--) {
        if (load >= pickups[house]) {
          load = load - pickups[house];
          pickups[house] = 0;
        } else if (0 < load && load < pickups[house]) {
          pickups[house] = pickups[house] - load;
          load = 0;
        }

        if (load === 0) break;
      }
    }

    leftPickups -= (cap - load);
  }

  return answer;
}