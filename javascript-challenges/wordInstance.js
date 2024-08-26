function wordInstanceCounter(sentence, word) {
  const mp = new Map();
  const sentArr = sentence.replace(/\W+/g, " ").toLowerCase().split(" ");

  for (let w of sentArr) {
    const c = (mp.get(w) || 0) + 1;
    mp.set(w, c);
  }

  return mp.get(word.toLowerCase());
}

console.log(
  wordInstanceCounter("The quick brown fox jumps over the lazy dog.", "the")
); // Output: 2
console.log(
  wordInstanceCounter(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "ipsum"
  )
); // Output: 1
console.log(wordInstanceCounter("Hello, world!", "hello")); // Output: 1
console.log(wordInstanceCounter("Hello, Hello, Hello!", "hello")); // Output: 3
