function firstNonRepeatingLetter(s) {
  const frequency = {};

  for (const letter of s) {
    const letterLow = letter.toLowerCase();

    frequency[letterLow] ? frequency[letterLow]++ : frequency[letterLow] = 1;
  }

  for (const letter of s) {
    const letterLow = letter.toLowerCase();

    if (frequency[letterLow] === 1) {
      return letter;
    }
  }

  return "";
}