function solution(name, yearning, photos) {
  const results = [];
  const score = {};

  for (let i = 0; i < name.length; i++) {
    score[name[i]] = yearning[i];
  }

  for (const photo of photos) {
    let result = 0;

    for (const name of photo) {
      if (score[name]) {
        result += score[name];
      }
    }

    results.push(result);
  }

  return results;
}