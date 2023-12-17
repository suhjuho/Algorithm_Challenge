// #2965
const findMissingAndRepeatedValues = function (grid) {
  const n = grid.length;
  const history = new Map();
  let gridSum = 0;
  let repeatedValue;

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (!history.get(grid[y][x])) {
        history.set(grid[y][x], true);
      } else {
        repeatedValue = grid[y][x];
      }
      gridSum += grid[y][x];
    }
  }

  const missingValue = (n ** 2) * (1 + n ** 2) / 2 - gridSum + repeatedValue;

  return [repeatedValue, missingValue];
};
