// https://leetcode.com/problems/convert-sorted-array-to-binary-search-tree/

/* Given an array where elements are sorted in ascending order, 
convert it to a height balanced BST.

For this problem, a height-balanced binary tree is defined as a
binary tree in which the depth of the two subtrees of every node never differ by more than 1.

Example:
Given the sorted array: [-10,-3,0,5,9],
One possible answer is: [0,-3,9,-10,null,5], 
which represents the following height balanced BST:

      0
     / \
   -3   9
   /   /
 -10  5 */

const arr1 = [-10,-3,0,5,9]

const zero = {val: 0}
const three = {val: -3}
const nine = {val: 9}
const ten = {val: -10}
const five = {val: 5}

zero.left = three
zero.right = nine

nine.left = five

three.left = ten

// Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  if (nums == null || !nums.length) {
    return null;
  }

  let mid = Math.floor(nums.length / 2);
  const node = new TreeNode(nums[mid]);
  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length))
  return node;
};

console.log(sortedArrayToBST(arr1), zero)
