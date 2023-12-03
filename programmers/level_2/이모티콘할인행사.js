function solution(users, emoticons) {
  const sales = [10, 20, 30, 40]
  const cases = [];
  const each = [];
  const results = [];

  function getCases(level) {
    if (level === emoticons.length) {
      cases.push(each.slice());
      return;
    }

    for (let i = 0; i < sales.length; i++) {
      each.push(sales[i]);
      getCases(level + 1);
      each.pop();
    }
  }

  getCases(0);

  for (let i = 0; i < cases.length; i++) {
    const each = cases[i];
    const result = [0, 0];

    for (const user of users) {
      let cost = 0;

      for (let j = 0; j < emoticons.length; j++) {
        if (user[0] <= each[j]) {
          cost += emoticons[j] * (100 - each[j]) / 100;
        }
      }

      if (cost >= user[1]) {
        result[0] += 1;
      } else {
        result[1] += cost;
      }
    }

    results.push(result)
  }

  results.sort((a, b) => b[1] - a[1]);
  results.sort((a, b) => b[0] - a[0]);

  return results[0];
}
