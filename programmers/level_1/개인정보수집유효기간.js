function solution(today, terms, privacies) {
  const termMap = {};
  const now = dateToDay(today);
  const results = [];

  for (const term of terms) {
    const [type, month] = term.split(" ");
    termMap[type] = Number(month);
  }

  const deadlines = privacies.map((privacy) => {
    const [date, type] = privacy.split(" ");

    return dateToDay(date) + termMap[type] * 28 - 1;
  });

  for (let i = 0; i < deadlines.length; i++) {
    if (deadlines[i] < now) {
      results.push(i + 1);
    }
  }

  return results;

  function dateToDay(date) {
    const [y, m, d] = date.split(".").map(Number);

    return y * 28 * 12 + m * 28 + d
  }
}
