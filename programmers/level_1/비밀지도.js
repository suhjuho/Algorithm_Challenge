function solution(n, arr1, arr2) {
  const map = [];

  for (let i = 0; i < n; i++) {
    const row = new Array(n).fill(" ");
    map.push(row);
  }

  for (let i = 0; i < arr1.length; i++) {
    const row = arr1[i];
    const wall = row.toString(2).padStart(n, "0");

    for (let j = 0; j < n; j++) {
      if (wall[j] === "1") {
        map[i][j] = "#";
      }
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    const row = arr2[i];
    const wall = row.toString(2).padStart(n, "0");

    for (let j = 0; j < n; j++) {
      if (wall[j] === "1") {
        map[i][j] = "#";
      }
    }
  }

  for (let i = 0; i < n; i++) {
    map[i] = map[i].join("");
  }

  return map;
}