// https://leetcode.com/problems/univalued-binary-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
**/

/**
 * @param {TreeNode} root
 * @return {boolean}
**/

const one1 = {val: 1}
const one2 = {val: 1}
const one3 = {val: 1}
const one4 = {val: 1}
const one5 = {val: 1}
const one6 = {val: 1}

one1.left = one2
one1.right = one3

one2.left = one4
one2.right = one5

one3.right = one6

var isUnivalTree = function(root) {
  var res = true

  res &= !root.left || root.left.val == root.val && isUnivalTree(root.left)
  res &= !root.right || root.right.val == root.val && isUnivalTree(root.right)

  return res > 0
};

console.log(isUnivalTree(one1), true)

