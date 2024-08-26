const Queue = require("./queue");
const Stack = require("./stack");
function isPalindromeQueueStack(ss) {
  const formattedStr = ss.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let flag = false;
  const queue = new Queue();
  const stack = new Stack();

  for (let s of formattedStr) {
    queue.enqueue(s);
    stack.push(s);
  }
  while (queue.getLength() && stack.getLength() > -1) {
    const s = stack.pop();
    const q = queue.dequeue();
    if (q !== s) {
      flag = false;
      break;
    }
    flag = true;
  }
  console.log(flag);
}

isPalindromeQueueStack("racecar"); // true
isPalindromeQueueStack("hello"); // false
isPalindromeQueueStack("A man, a plan, a canal: Panama"); // true
