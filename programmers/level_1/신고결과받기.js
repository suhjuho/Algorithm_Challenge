function solution(id_list, reports, k) {
  const datas = {};
  const banned = [];
  const results = [];

  for (const id of id_list) {
    datas[id] = [[], 0];
  }

  for (const report of reports) {
    const [user, target] = report.split(" ");

    if (!datas[user][0].includes(target)) {
      datas[user][0].push(target);
      datas[target][1] += 1;
    }
  }

  for (const user in datas) {
    const data = datas[user];

    if (data[1] >= k) {
      banned.push(user);
    }
  }

  for (const user in datas) {
    const data = datas[user];
    let result = 0;

    for (const target of data[0]) {
      if (!!banned.includes(target)) {
        result += 1;
      }
    }

    results.push(result);
  }

  return results;
}