function solution(keymaps, targets) {
  const typeTime = {};
  const results = [];

  for (const keymap of keymaps) {
    for (let i = 0; i < keymap.length; i++) {
      if (!!typeTime[keymap[i]]) {
        typeTime[keymap[i]] = Math.min(typeTime[keymap[i]], i + 1)
      } else {
        typeTime[keymap[i]] = i + 1;
      }
    }
  }

  for (const target of targets) {
    let result = 0;

    for (const key of target) {
      if (!typeTime[key]) {
        result = -1;
        break;
      }

      result += typeTime[key];
    }

    results.push(result);
  }

  return results;
}