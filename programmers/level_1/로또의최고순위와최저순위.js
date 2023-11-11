function solution(lottos, win_nums) {
  const results = [];
  let correct = 0;
  let zeros = 0;
  const score = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
  };

  for (const lotto of lottos) {
    if (lotto === 0) {
      zeros += 1;
    }

    if (win_nums.includes(lotto)) {
      correct += 1;
    }
  }

  if (!!score[correct + zeros]) {
    results.push(score[correct + zeros]);
  } else {
    results.push(6);
  }

  if (!!score[correct]) {
    results.push(score[correct]);
  } else {
    results.push(6);
  }

  return results;
}
