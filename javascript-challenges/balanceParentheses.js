function isBalanced(ss) {
  const stack = [];

  for (let s of ss) {
    if (s === "(") {
      stack.push(s);
    } else if (s === ")") {
      stack.pop();
    }
  }
  if (!stack.length) console.log(true);
  else console.log(false);
}

isBalanced("()"); // true
isBalanced("()()"); // true
isBalanced("(()())"); // true
isBalanced("(()"); // false
isBalanced(")("); // false
