/**
 * For Standard form, subtractive notation is used, meaning 4 is IV rather than IIII, 9 is IX rather than VIIII. Same rule applies to 40(XL) and 900(CM) .etc.
 * Simply speaking, the roman numerals in standard form follow these rules.
 * symbols are listed from highest to lowest, from left to right
 * from left to right, if the next symbol value is bigger than current one, it means subtracting, otherwise adding.
 *
 * Please implement romanToInteger(). The input are all valid strings.
 * @param {string} str - roman numeral string
 * @returns {number} integer
 */
function romanToInteger(str) {
  // your code here
  const store = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;
  let i = 0;
  while (i < str.length) {
    if (i + 1 < str.length && store[str[i]] < store[str[i + 1]]) {
      result += store[str[i + 1]] - store[str[i]];
      i = i + 2;
    } else {
      result += store[str[i]];
      i++;
    }
  }
  return result;
}
