class Queue {
  constructor() {
    this.queue = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 100;
  }

  getLength() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.getLength() === 0;
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }

  enqueue(e) {
    if (this.isFull()) {
      return false;
    }
    this.queue[this.tail] = e;
    this.tail++;
    return true;
  }

  dequeue() {
    const e = this.queue[this.head];
    this.head++;
    return e;
  }

  peek() {
    return this.queue[this.head];
  }
}

module.exports = Queue;
