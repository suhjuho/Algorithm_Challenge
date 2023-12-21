/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  let phrase = "";

  for (let i = 0; i < s.length; i++) {
    if (65 <= s[i].charCodeAt() && s[i].charCodeAt() <= 90) {
      phrase += s[i].toLowerCase();
    } else if (97 <= s[i].charCodeAt() && s[i].charCodeAt() <= 122) {
      phrase += s[i];
    } else if (48 <= s[i].charCodeAt() && s[i].charCodeAt() <= 57) {
      phrase += s[i];
    }
  }

  for (let i = 0; i < Math.floor(phrase.length / 2); i++) {
    if (phrase[i] !== phrase[phrase.length - 1 - i]) {
      return false;
    }
  }

  return true;
};
