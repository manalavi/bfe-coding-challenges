class Node {
  constructor(data) {
    (this.data = data), (this.next = null);
  }
}

class LinkedList {
  constructor() {
    (this.head = null), (this.tail = null);
  }

  add(data) {
    const node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
  }

  printAll() {
    let current = this.head;

    while (current !== null) {
      console.log(current.data);
      current = current.next;
    }
  }

  get(index) {
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }
    return current.data;
  }

  insertAt(index, data) {
    const node = new Node(data);
    if (index === 0) {
      node.next = this.head;
      this.head = node;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      node.next = current;
      previous.next = node;
    }
  }

  removeFrom(index) {
    if (index === 0) {
      this.head = this.head.next;
    } else {
      let current = this.head;
      let previous = null;
      let i = 0;

      while (i < index) {
        previous = current;
        current = current.next;
        i++;
      }

      previous.next = current.next;
    }
  }
}

// const list = new LinkedList();

// list.add(1);
// list.add(2);
// list.add(3);
// list.add(4);
// list.printAll();
// list.insertAt(1, "yippy!!");

// list.printAll();

// list.removeFrom(1);
// list.printAll();

module.exports = LinkedList;
