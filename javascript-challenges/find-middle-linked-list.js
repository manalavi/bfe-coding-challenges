const LinkedList = require("./linked-list");

/**
 * Returns the middle node of the linked list.
 * @param {LinkedList} list - The linked list.
 * @returns {(Node|null)} - The middle node of the linked list.
 */

function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  let prev = null;
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  //   if (fast === null) {
  //     console.log(prev.next); // even number of nodes
  //   } else {
  //     console.log(slow); // odd number of nodes
  //   }
  console.log(slow);
}

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3); // Middle node
list.add(4);
list.add(5);
// list.add(6);

findMiddle(list); // returns 3
