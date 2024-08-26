const LinkedList = require("./linked-list");

function reverseStringQueue(ss) {
  const ll = new LinkedList();

  for (let i = ss.length - 1; i >= 0; i--) {
    ll.add(ss[i]);
  }

  let current = ll.head;
  let reverseString = "";
  while (current) {
    reverseString += current?.data;
    current = current?.next;
  }
  console.log(reverseString);
}

reverseStringQueue("hello"); // olleh
reverseStringQueue("Howdy"); // ydwoH
reverseStringQueue("Greetings from Earth"); // htraE morf sgniteerG
