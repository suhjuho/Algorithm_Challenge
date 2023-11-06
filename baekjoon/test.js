const fs = require('fs');
const input = fs.readFileSync("./dev/stdin.txt").toString().trim().split("\n");

const N = Number(input[0]);
const X = input[1].split(" ").map(Number);
let sortedX = new Set(X);
sortedX = [...sortedX].sort((a, b) => b - a);
const compressions = {};
const length = sortedX.length
const result = [];

for (let i = 0; i < length; i++) {
  compressions[sortedX[i]] = length - 1 - i
}

for (const x of X) {
  result.push(compressions[x]);
}

console.log(result.join(" "));
