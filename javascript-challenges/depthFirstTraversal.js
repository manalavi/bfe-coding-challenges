const Stack = require("./stack");

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function depthFirstTraversal(root) {
  if (!root) {
    return [];
  }

  const result = [];
  const stack = new Stack();

  stack.push(root);

  while (!stack.isEmpty()) {
    const current = stack.pop();
    result.push(current.data);

    if (current.left) {
      stack.push(current.left);
    }
    if (current.right) {
      stack.push(current.right);
    }
  }

  return result;
}

module.exports = {
  Node,
  depthFirstTraversal,
};

const root = new Node("a");
const nodeB = new Node("b");
const nodeC = new Node("c");
const nodeD = new Node("d");
const nodeE = new Node("e");
const nodeF = new Node("f");

root.left = nodeB;
root.right = nodeC;
nodeB.left = nodeD;
nodeB.right = nodeE;
nodeC.left = nodeF;

console.log(depthFirstTraversal(root));
