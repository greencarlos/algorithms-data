// https://leetcode.com/problems/minimum-distance-between-bst-nodes/

const four = {val: 4}
const two = {val: 2}
const six = {val: 6}
const one = {val: 1}
const three = {val: 3}

four.left = two
four.right = six
two.left = one
two.right = three

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
**/

// Iterative
/*
var minDiffInBST = function(root, dist = 0) {
  const stack = []
  let curr = root, prev = null, min = Infinity

  while(stack.length || curr) {
    if (curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()

      if (prev) {
        min = Math.min(min, Math.abs(curr.val - prev.val))
      }

      prev = curr
      curr = curr.right
    }
  }
  return min
};
*/

// Recursive
const minDiffInBST = root => {
  let prev = null
  let min = Infinity

  const inorder = curr => {
    if (!curr) return

    inorder(curr.left)

    if (prev) {
      min = Math.min(min, Math.abs(curr.val - prev.val))
    }
    prev = curr
    inorder(curr.right)
  }
  inorder(root)
  return min
}

console.log(four)
console.log(minDiffInBST(four))
