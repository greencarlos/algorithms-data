// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

const zero = {val: 0}
const one = {val: 1}
const two = {val: 2}
const three = {val: 3}
const four = {val: 4}
const five = {val: 5}
const six = {val: 6}
const seven = {val: 7}
const eight = {val: 8}

three.left = five
three.right = one

one.left = zero
one.right = eight

five.left = six
five.right = two

two.left = seven
two.right = four

var lowestCommonAncestor = function(root, p, q) {
  if (!root) return null
  if (root.val === p.val || root.val === q.val) return root
  let x = lowestCommonAncestor(root.left, p, q)
  let y = lowestCommonAncestor(root.right, p, q)
  if (x && y) return root
  return x ? x : y;
};

console.log(lowestCommonAncestor(three, 5, 1), 3)
console.log(lowestCommonAncestor(three, 5, 4), 3)
