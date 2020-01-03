// https://leetcode.com/problems/minimum-depth-of-binary-tree/
//

/* Given a binary tree, find its minimum depth.
The minimum depth is the number of nodes along the 
shortest path from the root node down to the nearest leaf node.

Note: A leaf is a node with no children.

Example:

Given binary tree [3,9,20,null,null,15,7],

    3
   / \
  9  20
    /  \
   15   7

return its minimum depth = 2.*/

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
**/

const three = {val: 3}
const nine = {val: 9}
const twenty = {val: 20}
const fifteen = {val: 15}
const seven = {val: 7}

three.left = nine
three.right = twenty

twenty.left = fifteen
twenty.right = seven

console.log(three, 'root 1')

const zero = {val: 0}

var minDepth = function(root) {
  if (!root) return 0
  var result
  function minHeight(root, depth) {
    if (!root.left && !root.right) {
      result = Math.min(result || depth, depth)
    }
    if (root.left) minHeight(root.left, depth + 1)
    if (root.right) minHeight(root.right, depth + 1)
  }
  minHeight(root, 1)
  return result
};

console.log(minDepth(three), 2)
console.log(minDepth(zero), 1)
console.log(minDepth({}), 1)
