function solution(survey, choices) {
  const tempMap = { R: 0, T: 0, C: 0, F: 0, J: 0, M: 0, A: 0, N: 0 };
  let result = "";

  for (let i = 0; i < survey.length; i++) {
    const types = survey[i];
    const choice = choices[i];

    if (choice > 4) {
      tempMap[types[1]] += choice - 4;
    } else {
      tempMap[types[0]] += 4 - choice;
    }
  }

  tempMap["R"] >= tempMap["T"] ? result += "R" : result += "T";
  tempMap["C"] >= tempMap["F"] ? result += "C" : result += "F";
  tempMap["J"] >= tempMap["M"] ? result += "J" : result += "M";
  tempMap["A"] >= tempMap["N"] ? result += "A" : result += "N";

  return result;
}
