class Node {
  constructor(data) {
    this.prev = null;
    this.data = data;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  append(data) {
    const newNode = new Node(data);
    const prevNode = this.tail;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      prevNode.next = newNode;
      this.tail = newNode;
      this.tail.prev = prevNode;
    }
    this.length++;
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

  printAll() {
    let current = this.head;

    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  prepend(data) {
    const newNode = new Node(data);
    const prevNode = this.head;
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      prevNode.prev = newNode;
      this.head = newNode;
      this.head.next = prevNode;
    }
    this.length++;
  }

  insert(index, data) {
    if (index < 0 || index > this.length) {
      return null;
    }
    if (index === 0) {
      return this.prepend(data);
    }
    if (index === this.length) {
      return this.append(data);
    }

    const newNode = new Node(data);
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;
  }

  remove(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    if (index === 0) {
      let current = this.head;
      this.head = current.next;
      this.head.prev = null;
      return;
    }

    if (index === this.length) {
      let current = this.tail;
      this.tail = current.prev;
      this.tail.next = null;
      return;
    }
    let current = this.head;
    let i = 0;

    while (i < index) {
      current = current.next;
      i++;
    }

    current.prev.next = current.next;
    current.next.prev = current.prev;
  }

  contains(data) {
    let current = this.head;
    // for (let i = 0; i < this.length; i++) {
    while (current) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }

    return false;
  }
}

// const dll = new DoublyLinkedList();
// dll.append(1);
// dll.append(2);
// dll.append(3);
// console.log(dll.contains(2));
// dll.insert(3, "Hello");
// console.log("before");
// dll.printAll();
// dll.remove(1);
// console.log("after");
// dll.printAll();
// console.log("Length:", dll.length);

module.exports = DoublyLinkedList;
