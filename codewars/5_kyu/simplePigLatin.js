function pigIt(str) {
  const strs = str.split(" ");
  const punctuations = [",", ".", "'", "-", '"', "!", "?"];
  let result = "";

  for (let i = 0; i < strs.length; i++) {
    let word = strs[i];
    const firstLetter = word[0];

    if (punctuations.includes(word)) {
      result += word;
      continue;
    }

    word = word.slice(1);
    word += firstLetter + "ay";
    result += word;

    if (i !== strs.length - 1) {
      result += " ";
    }
  }

  return result;
}