function scramble(str1, str2) {
  const letters = {};

  for (const letter of str1) {
    letters[letter] ? letters[letter]++ : letters[letter] = 1;
  }

  for (const letter of str2) {
    if (letters[letter] > 0) {
      letters[letter]--;
    } else {
      return false;
    }
  }

  return true;
}
