const Node = require("./TreeNode");

const root = new Node("a");
root.left = new Node("b");
root.right = new Node("c");
root.left.left = new Node("d");
root.left.right = new Node("e");
root.right.left = new Node("f");

function bfs(root) {
  if (!root) return [];

  const res = [];
  const q = [];
  q.push(root);

  while (q.length != 0) {
    const current = q.shift();
    res.push(current.data);

    if (current.left) q.push(current.left);
    if (current.right) q.push(current.right);
  }
  return res;
}

console.log(bfs(root));
