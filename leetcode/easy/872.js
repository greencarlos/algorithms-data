// https://leetcode.com/problems/leaf-similar-trees/

/** 
Consider all the leaves of a binary tree.
From left to right order, the values of those 
leaves form a leaf value sequence.

For example, 
in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).

Two binary trees are considered leaf-similar 
if their leaf value sequence is the same.

Return true if and only if the two given trees 
with head nodes root1 and root2 are leaf-similar.
 **/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */

const one = {val: 1}
const two = {val: 2}
const three = {val: 3}
const four = {val: 4}
const five = {val: 5}
const six = {val: 6}
const seven = {val: 7}
const eight = {val: 8}
const nine = {val: 9}

three.left = five 
three.right = one

five.left = six
five.right = two

one.left = nine
one.right = eight

two.left = seven
two.right = four

const one2 = {val: 1}
const two2 = {val: 2}
const three2 = {val: 3}
const four2 = {val: 4}
const five2 = {val: 5}
const six2 = {val: 6}
const seven2 = {val: 7}
const eight2 = {val: 8}
const nine2 = {val: 9}

three2.left = five2
three2.right = one2

five2.left = six2
five2.right = seven2

one2.left = four2
one2.right = two2

two2.left = nine2
two2.right = eight2



var leafSimilar = function(root1, root2) {
  let leaves1 = []
  getLeaves(root1, leaves1)
  let leaves2 = []
  getLeaves(root2, leaves2)

  if (leaves1.length !== leaves2.length) {
    return false
  }

  for (let i = 0; i < leaves1.length; i++) {
    if (leaves1[i] != leaves2[i]) {
      return false
    }
  }

  return true
  function getLeaves(root, leaves) {
    if (root != null) {
      if (root.left == null && root.right == null) 
        leaves.push(root.val)
        getLeaves(root.left, leaves)
        getLeaves(root.right, leaves)
    }
  }
}

console.log(three, 'root 1')
console.log(three2, 'root 2')
console.log(leafSimilar(three, three2), true)

