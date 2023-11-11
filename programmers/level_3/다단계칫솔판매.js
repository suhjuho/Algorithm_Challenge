function solution(enroll, referral, seller, amount) {
  const people = {};
  const results = [];

  for (let i = 0; i < enroll.length; i++) {
    people[enroll[i]] = [referral[i], 0];
  }

  for (let i = 0; i < seller.length; i++) {
    collect(seller[i], amount[i] * 100);
  }

  function collect(person, money) {
    if (person === "-" || money === 0) return;

    people[person][1] += money - Math.floor(money / 10);
    collect(people[person][0], Math.floor(money / 10));
  }

  for (const person in people) {
    results.push(people[person][1]);
  }

  return results;
}
