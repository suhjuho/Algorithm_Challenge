/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const charCountMap = new Map();

  for (let i = 0; i < s.length; i++) {
    if (!charCountMap.get(s[i])) {
      charCountMap.set(s[i], 1);
    } else {
      charCountMap.set(s[i], charCountMap.get(s[i]) + 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    if (!charCountMap.get(t[i])) {
      return false;
    } else {
      if (charCountMap.get(t[i]) === 0) {
        return false;
      }

      charCountMap.set(t[i], charCountMap.get(t[i]) - 1);
    }
  }

  return true;
};
