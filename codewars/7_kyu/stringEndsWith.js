function solution(str, ending) {
  if (str.length < ending.length) {
    return false;
  }

  return str.slice(str.length - ending.length) === ending;
}