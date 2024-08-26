/**
 * Finds the maximum sum of any subarray of length k in the input array using an O(n^2) solution.
 * @param {number[]} arr - The input array of integers.
 * @param {number} k - The length of the subarray.
 * @returns {number} - The maximum sum of any subarray of length k.
 * function maxSubarraySum(arr: number[], k: number): number
 */

// function maxSubarraySum(arr, k) {
//   const nums = [];

//   for (let i = 0; i < arr.length; i++) {
//     nums.push(arr.slice(i, i + k).reduce((a, i) => a + i, 0));
//     console.log(nums);
//   }

//   return Math.max(...nums);
// }

// const arr1 = [2, 5, 3, 1, 11, 7, 6, 4];
// const k1 = 3;
// console.log(maxSubarraySum(arr1, k1)); // Output: 24

const arr2 = [-2, -5, -3, -1, -11, -7, -6, -4];
const k2 = 4;
console.log(maxSubarraySum(arr2, k2)); // Output: -4
