const Node = require("./TreeNode");

function depthFirstTraversalRecursive(root) {
  if (!root) {
    return [];
  }
  const result = [];
  const node = root;

  DFSHelperFunc(node, result);
  console.log(result);
}

function DFSHelperFunc(node, result) {
  //   console.log(node, result);
  if (!node) {
    return;
  } else {
    result.push(node.data);
  }
  if (node.left) {
    DFSHelperFunc(node.left, result);
  }
  if (node.right) {
    DFSHelperFunc(node.right, result);
  }
}

const root = new Node("a");
root.left = new Node("b");
root.right = new Node("c");
root.left.left = new Node("d");
root.left.right = new Node("e");
root.right.left = new Node("f");
console.log(depthFirstTraversalRecursive(root));
