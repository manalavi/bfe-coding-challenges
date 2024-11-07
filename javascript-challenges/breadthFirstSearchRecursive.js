const Node = require("./TreeNode");

const root = new Node("a");
root.left = new Node("b");
root.right = new Node("c");
root.left.left = new Node("d");
root.left.right = new Node("e");
root.right.left = new Node("f");

function bfsR(root) {
  if (!root) return [];
  const res = [];
  res.push(root.data);
  function bfsr(root) {
    if (!root) {
      return;
    }
    if (root.left) {
      res.push(root.left.data);
    }
    if (root.right) {
      res.push(root.right.data);
    }
    bfsr(root.left);
    bfsr(root.right);
  }

  bfsr(root);
  return res;
}

console.log(bfsR(root));
