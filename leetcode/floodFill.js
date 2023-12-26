const floodFill = function(image, sr, sc, color) {
  const imageCopied = image.map(el => [...el]);
  const filled = imageCopied.map(el => new Array(el.length).fill(false));
  const centerColor = imageCopied[sr][sc];
  const queue = [[sr, sc]];
  const dy = [-1, 1, 0, 0];
  const dx = [0, 0, -1, 1];

  while (queue.length > 0) {
    const [r, c] = queue.shift();
    imageCopied[r][c] = color;
    filled[r][c] = true;

    for (let i = 0; i < 4; i++) {
    const [nr, nc] = [r + dy[i], c + dx[i]];

    if (0 <= nr && nr < imageCopied.length && 0 <= nc && nc < imageCopied[0].length) {
        if (imageCopied[nr][nc] === centerColor && !filled[nr][nc]) {
            queue.push([nr, nc]);
        }
    }
    }
  }

  return imageCopied;
};
