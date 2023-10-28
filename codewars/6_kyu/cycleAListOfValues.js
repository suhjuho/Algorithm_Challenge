function cycle(dir, arr, cur) {
  let index = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === cur) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return null;
  }

  if (dir === 1) {
    return arr[(index + arr.length + 1) % arr.length]
  } else if (dir === -1) {
    return arr[(index + arr.length - 1) % arr.length]
  }
}