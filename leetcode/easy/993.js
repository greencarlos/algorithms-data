// https://leetcode.com/problems/cousins-in-binary-tree/

/* In a binary tree, the root node is at depth 0, 
and children of each depth k node are at depth k+1.

Two nodes of a binary tree are cousins if they have the same depth, 
but have different parents.

We are given the root of a binary tree with unique values, 
and the values x and y of two different nodes in the tree.

Return true if and only if the nodes corresponding to the 
values x and y are cousins. 

    (1)
    / \
 (2)  (3)
 /
(4)

x = 4, y = 3
output: false


    (1)
    / \
  (2) (3)
   \    \
   (4)  (5)

x = 5, y = 4
output: true

    (1)
    / \
  (2) (3)
   \
   (4)
 
x = 2, y = 3
output: false */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */

const one1 = {val: 1}
const two1 = {val: 2}
const three1 = {val: 3}
const four1 = {val: 4}

one1.left = two1
one1.right = three1

two1.left = four1

// Example 2
const one2 = {val: 1}
const two2 = {val: 2}
const three2 = {val: 3}
const four2 = {val: 4}
const five2 = {val: 5}

one2.left = two2
one2.right = three2

two2.left = four2
three2.right = five2

// Example 3
const one3 = {val: 1}
const three3 = {val: 3}
const two3 = {val: 2}
const four3 = {val: 4}

one3.left = two3
one3.right = three3

two3.right = four3


var isCousins = function(root, x, y) {
  function getDepthAndParent(node, n, depth=0, parent) {
    if (!node) return null
    if (node.val === n) {
      return {depth, parent}
    }
    let left = getDepthAndParent(node.left, n, depth+1, node)
    let right = getDepthAndParent(node.right, n, depth+1, node)
    return left || right
  }
  let {depth: xDepth, parent: xParent} = getDepthAndParent(root, x)
  let {depth: yDepth, parent: yParent} = getDepthAndParent(root, y)

  return xDepth === yDepth && xParent !== yParent
};

console.log(isCousins(one1, 4, 3), false)
console.log(isCousins(one2, 5, 4), true)
console.log(isCousins(one3, 2, 3), false)
