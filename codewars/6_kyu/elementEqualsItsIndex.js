function indexEqualsValue(a) {
  const results = [];
  let [start, end] = [0, a.length - 1];
  let mid = Math.floor((start + end) / 2);

  while (start <= end) {
    if (mid > a[mid]) {
      start = mid + 1;
    } else if (mid < a[mid]) {
      end = mid - 1;
    } else {
      results.push(mid);

      end = mid - 1;
    }

    mid = Math.floor((start + end) / 2);
  }

  if (results.length !== 0) {
    return results.pop();
  }

  return -1;
}