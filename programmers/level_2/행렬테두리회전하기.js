function solution(rows, columns, queries) {
  const matrix = [];
  let count = 1;
  const results = [];

  for (let y = 0; y < rows; y++) {
    const arr = [];

    for (let x = 0; x < columns; x++) {
      arr.push(count)
      count += 1;
    }

    matrix.push(arr);
  }

  for (const query of queries) {
    rotate(query);
  }

  return results;

  function rotate(query) {
    const [startY, startX, endY, endX] = query;
    let temp = matrix[startY - 1][startX - 1];
    let minNumber = rows * columns;

    for (let x = startX - 1; x < endX; x++) {
      [matrix[startY - 1][x], temp] = [temp, matrix[startY - 1][x]];
      minNumber = Math.min(temp, minNumber);
    }

    for (let y = startY; y < endY; y++) {
      [matrix[y][endX - 1], temp] = [temp, matrix[y][endX - 1]];
      minNumber = Math.min(temp, minNumber);
    }

    for (let x = endX - 2; x >= startX - 1; x--) {
      [matrix[endY - 1][x], temp] = [temp, matrix[endY - 1][x]];
      minNumber = Math.min(temp, minNumber);
    }

    for (let y = endY - 2; y >= startY - 1; y--) {
      [matrix[y][startX - 1], temp] = [temp, matrix[y][startX - 1]];
      minNumber = Math.min(temp, minNumber);
    }

    results.push(minNumber);
  }
}
