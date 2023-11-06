function pickPeaks(arr) {
  const pos = [];
  const peaks = [];
  let isPateau = false;
  let pateau = [0, 0];

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      if (arr[i] > arr[i + 1]) {
        pos.push(i);
        peaks.push(arr[i]);
      } else if (arr[i] === arr[i + 1]) {
        isPateau = true;
        pateau = [i, arr[i]];
      }
    }

    if (isPateau && arr[i] < arr[i + 1]) {
      isPateau = false;
    }

    if (isPateau && arr[i] > arr[i + 1]) {
      pos.push(pateau[0]);
      peaks.push(pateau[1]);

      isPateau = false;
    }
  }

  return { pos: pos, peaks: peaks }
}