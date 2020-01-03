// https://leetcode.com/problems/two-sum-iv-input-is-a-bst/

/* Given a Binary Search Tree and a target number, 
return true if there exist two elements in the 
BST such that their sum is equal to the given target.

Example 1:
Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 9
Output: True


Example 2:
Input:
    5
   / \
  3   6
 / \   \
2   4   7

Target = 28
Output: False */

const five = {val: 5}
const three = {val: 3}
const six = {val: 6}
const two = {val: 2}
const four = {val: 4}
const seven = {val: 7}

five.left = three
five.right = six

three.left = two
three.right = four

six.right = seven

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  return inorder(root, k, {});
};

function inorder(root, k, hash) {
  if (!root) return
  if (inorder(root.left, k, hash)) {
    return true;
  }
  if (hash[root.val]) {
    return true;
  } else {
    hash[k-root.val] = true;
  }
  if (inorder(root.right, k, hash)) {
    return true;
  }
  return false;
}

console.log(findTarget(five, 9), true)
console.log(findTarget(five, 28), false)
