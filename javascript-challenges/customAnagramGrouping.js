/**
 * Groups anagrams from the input array of words using a HashTable.
 * @param {string[]} words - An array of words.
 * @returns {string[][]} - An array of arrays, each representing a group of anagrams.
 */

function anagramGrouping(words) {
  const mp = new Map();
  const final = [];
  for (let item of words) {
    const w = item.split("").sort().join("");
    if (mp.has(w)) {
      mp.set(w, [...mp.get(w), item]);
    } else {
      mp.set(w, [item]);
    }
  }

  for (let w of mp.keys()) {
    final.push([mp.get(w)]);
  }
  console.log(final);
}

anagramGrouping(["listen", "silent", "hello", "world", "act", "cat"]);
// Output: [['listen', 'silent'], ['act', 'cat'], ['hello'], ['world']]
