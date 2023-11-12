function alphabetWar(battlefield) {
  let group = "";
  let alphabets = [];
  let isBomb = battlefield.includes("#");

  if (!isBomb) {
    return battlefield.replaceAll("[", "").replaceAll("]", "");
  }

  for (const alphabet of battlefield) {
    if (alphabet === "[") {
      if (group !== "") {
        alphabets.push(group);
        group = "";
      }

      group += alphabet;
    } else if (alphabet === "]") {
      group += alphabet;

      alphabets.push(group)
      group = "";
    } else {
      group += alphabet;
    }
  }

  if (group !== "") {
    alphabets.push(group);
  }

  for (let i = 0; i < alphabets.length; i++) {
    if (alphabets[i].includes("#")) {
      alphabets[i] = "#".repeat(alphabets[i].split("").filter(item => item === "#").length);
    } else if (!alphabets[i].includes("[")) {
      alphabets[i] = "";
    }
  }

  for (let i = 0; i < alphabets.length; i++) {
    let nearBomb = 0;

    if (alphabets[i].includes("[")) {
      if (!!alphabets[i - 1] && !alphabets[i - 1].includes("[")) {
        nearBomb += alphabets[i - 1].length;
      }

      if (!!alphabets[i + 1] && !alphabets[i + 1].includes("[")) {
        nearBomb += alphabets[i + 1].length;
      }
    }

    if (nearBomb > 1) {
      alphabets[i] = "";
    }
  }

  return alphabets.join("").replaceAll("#", "").replaceAll("[", "").replaceAll("]", "");
}