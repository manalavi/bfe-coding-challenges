function reverseStringStack(str) {
  const stack = [];

  for (let s of str) {
    stack.push(s);
  }
  let reverseString = "";
  while (stack.length) {
    const s = stack.pop();
    reverseString += s;
  }
  console.log(reverseString);
}

reverseStringStack("hello"); // olleh
reverseStringStack("Howdy"); // ydwoH
reverseStringStack("Greetings from Earth"); // htraE morf sgniteerG
