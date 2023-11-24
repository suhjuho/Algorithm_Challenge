function solution(fees, records) {
  const history = {};
  const cost = {};
  const results = [];

  for (const record of records) {
    const [time, carNumber, state] = record.split(" ");
    const [h, m] = time.split(":").map(Number);

    if (state === "IN") {
      history[carNumber] = h * 60 + m;
    }

    if (state === "OUT") {
      const total = h * 60 + m - history[carNumber];
      cost[carNumber] ? cost[carNumber] += total : cost[carNumber] = total;
      history[carNumber] = -1;
    }
  }

  for (const key in history) {
    if (history[key] !== -1) {
      cost[key] ? cost[key] += 23 * 60 + 59 - history[key] : cost[key] = 23 * 60 + 59 - history[key];
    }

    let value = fees[1];
    if (cost[key] > fees[0]) {
      value += Math.ceil((cost[key] - fees[0]) / fees[2]) * fees[3];
    }
    results.push([key, value]);
  }

  results.sort((a, b) => a[0] - b[0]);

  return results.map(el => el[1]);
}
