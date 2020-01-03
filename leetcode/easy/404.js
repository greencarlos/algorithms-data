// https://leetcode.com/problems/sum-of-left-leaves/

/* Find the sum of all left leaves in a given binary tree.

Example:

    3
   / \
  9  20
    /  \
   15   7

There are two left leaves in the binary tree, 
with values 9 and 15 respectively. Return 24.*/

const three = {val: 3}
const nine = {val: 9}
const twenty = {val: 20}
const teen5 = {val: 15}
const seven = {val: 7}

three.left = nine
three.right = twenty

twenty.left = teen5
twenty.right = seven
  
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {

  const dfs = (root) => {
    if (!root) return 0
    let result = 0
    if (root.left) {
      if (!root.left.left && !root.left.right) {
        result += root.left.val
      } else {
        result += dfs(root.left)
      }
    }
    result += dfs(root.right)
    return result
  }
  return dfs(root)
};

console.log(sumOfLeftLeaves(three))
