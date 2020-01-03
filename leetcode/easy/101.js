// https://leetcode.com/problems/symmetric-tree/

const one = {val: 1}
const two = {val: 2}
const two2 = {val: 2}
const three = {val: 3}
const four = {val: 4}
const four2 = {val: 4}
const three2 = {val: 3}

one.left = two
one.right = two2

two.left = three
two.right = four

two2.left = four2
two2.right = three2

const n1 = {val: 1}
const n2 = {val: 2}
const node2 = {val: 2}
const n3 = {val: 3}
const node3 = {val: 3}

n1.left = n2
n1.right = node2

n2.right = n3
node2.right = n3

const a = {val: 1}
const b = {val: 2}
const c = {val: 3}
const d = {val: 4}

a.right = b
b.right = c
c.right = d

const A = {val: 1}
const B = {val: 2}
const C = {val: 3}
const D = {val: 4}
const E = {val: 3}

A.right = B
B.left = C
C.left = D
C.right = E

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) return true;

  let Helper = (left, right) => {
    if (!left && !right) return true; 
    if (!left || !right) return false;
    if (left.val !== right.val) return false;

    return (Helper(left.left, right.right) && Helper(left.right, right.left))
  }

  return Helper(root.left, root.right)
};

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

console.log(isSymmetric(one), true)
console.log(isSymmetric(n1), false)
console.log(isSymmetric(a), false)
console.log(isSymmetric(A), false)
