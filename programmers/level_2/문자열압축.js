function solution(s) {
  let min = s.length;

  for (let step = 1; step <= Math.floor(s.length / 2); step++) {
    const countUnits = [];
    const units = [];
    let len = 0;

    for (let i = 0; i < s.length; i += step) {
      const unit = s.slice(i, i + step);

      if (units[units.length - 1] === unit) {
        countUnits[countUnits.length - 1] += 1;
      } else {
        units.push(unit);
        countUnits.push(1);
      }
    }

    len = units.join("").length + countUnits.filter(el => el > 1).join("").length;
    min = Math.min(min, len)
  }

  return min;
}
