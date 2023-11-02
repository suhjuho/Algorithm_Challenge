function topThreeWords(text) {
  const regx = /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(]/gi;
  const regexr = /[A-Za-z]+/g;
  text = text.replace(regx, " ");

  let words = text.split(" ").filter((el) => el !== "");
  words = words.filter((el) => el.match(regexr));

  const frequency = {};
  const frequencyArr = [];
  let result = [];

  for (const word of words) {
    const newWord = word.toLowerCase();
    frequency[newWord] ? frequency[newWord]++ : frequency[newWord] = 1;
  }

  for (const [key, value] of Object.entries(frequency)) {
    frequencyArr.push([key, value]);
  }

  frequencyArr.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < frequencyArr.length; i++) {
    if (i === 3) {
      break;
    }

    result.push(frequencyArr[i][0].toLowerCase());
  }

  return result;
}
