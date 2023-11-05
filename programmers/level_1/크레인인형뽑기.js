function solution(board, moves) {
  let answer = 0;
  const stack = [];

  for (const move of moves) {
    const x = move - 1;

    for (let y = 0; y < board.length; y++) {
      if (board[y][x] !== 0) {
        if (board[y][x] === stack[stack.length - 1]) {
          answer += 2;

          stack.pop();
        } else {
          stack.push(board[y][x]);
        }

        board[y][x] = 0;
        break;
      }
    }
  }

  return answer;
}
