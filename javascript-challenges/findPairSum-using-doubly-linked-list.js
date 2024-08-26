const DoublyLinkedList = require("./doubly-linked-list");

function findPairSum(numd, targetSum) {
  const dll = new DoublyLinkedList();

  for (let num of nums) {
    const diff = targetSum - num;
    if (dll.contains(diff)) {
      return [diff, num];
    }
    dll.append(num);
  }
}

const nums = [2, 6, 3, 8, 10, 5];
const targetSum = 13;

const pair = findPairSum(nums, targetSum);
console.log(pair); // Should print: [2, 10]
