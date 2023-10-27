function solution(list) {
  let result = "";
  let start = null;
  let end = null;

  for (let i = 0; i < list.length; i++) {
    const number = list[i];

    if (!start) {
      start = number;
      continue;
    }

    if ((list[i - 1] + 1) === number) {
      end = number;
    } else {
      if ((start + 1) === end) {
        result += `${start},${end},`;
      } else {
        if (end) {
          result += `${start}-${end},`;
        } else {
          result += `${start},`;
        }
      }

      start = number;
      end = null;
    }
  }

  if ((start + 1) === end) {
    result += `${start},${end}`;
  } else {
    if (end) {
      result += `${start}-${end}`;
    } else {
      result += `${start}`;
    }
  }

  return result;
}
