// import Queue from "./queue";
const Queue = require("./queue");

function reverseStringQueue(ss) {
  const q = new Queue();
  for (let i = ss.length - 1; i >= 0; i--) {
    q.enqueue(ss[i]);
  }

  let reverseString = "";
  while (q.getLength()) {
    reverseString += q.dequeue();
  }
  console.log(reverseString);
}

reverseStringQueue("hello"); // olleh
reverseStringQueue("Howdy"); // ydwoH
reverseStringQueue("Greetings from Earth"); // htraE morf sgniteerG
