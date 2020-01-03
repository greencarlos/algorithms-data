// https://leetcode.com/problems/trim-a-binary-search-tree/

const one = {val: 1}
const zero = {val: 0}
const two = {val: 2}

one.left = zero
one.right = two

console.log(one, 'one')

const one2 = {val: 1}
const two2 = {val: 2}
const zero2 = {val: 0}
const three2 = {val: 3}
const four2 = {val: 4}

three2.left = zero2
three2.right = four2 

zero2.right = two2
two2.left = one2 

console.log(three2, 'root 2')

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var trimBST = function(root, L, R) {
  if (!root) return null
  if (root.val > R) {
    return trimBST(root.left, L, R)
  }
  if (root.val < L) {
    return trimBST(root.right, L, R)
  }
  root.left = trimBST(root.left, L, R)
  root.right = trimBST(root.right, L, R)
  return root
};

console.log(" ")
console.log(trimBST(one, 1, 2))
/* Output:
  (1)
    \
    (2) */
console.log(trimBST(three2, 1, 3))
/* Output: 
     (3)
     /
   (2)
   /
 (1)*/
