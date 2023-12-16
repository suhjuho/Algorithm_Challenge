const isValid = function (s) {
  const results = [];
  const bracketPair = { "(": ")", "{": "}", "[": "]" };

  for (const bracket of s) {
    if (results.length === 0) {
      results.push(bracket);
      continue;
    }

    const prevBracket = results.pop();

    if (bracketPair[prevBracket] !== bracket) {
      results.push(prevBracket);
      results.push(bracket);
    }
  }

  return (results.length === 0) ? true : false;
};
