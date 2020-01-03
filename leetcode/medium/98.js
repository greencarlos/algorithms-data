// https://leetcode.com/problems/validate-binary-search-tree/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
**/

// Time Complexity O(n) 

// Space Complexity 
// Best Case: O(log N) binary search tree
// Worse Case: O(h) h = height of tree

// Each recursive call takes all the parameters
// and adds them to the call stack with each call

/*
Given a binary tree, determine if it is a valid binary search tree (BST).

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

/**
 * @param {TreeNode} root
 * @return {boolean}
**/

// valid
const two1 = {val: 2}//   (2) root
const one1 = {val: 1}//   / \
const three1 = {val: 3}//(1) (3)

two1.left = one1
two1.right = three1

console.log(two1, 'tree 1')

// invalid
const five2 = {val: 5} // (5) root
const one2 = {val: 1} //  /  \
const four2 = {val: 4}//(1)  (4)
const three2 = {val: 3}//   /  \
const six2 = {val: 6}//    (3)  (6)
five2.left = one2
five2.right = four2

four2.left = three2
four2.right = six2

console.log(five2, 'tree 2')

// invalid (right sub tree must be bigger than root)
// 5, 1, 6, 4, 7
const five3 = {val: 5}// (5) root
const one3 = {val: 3}//  / \
const six3 = {val: 6}//(1)  (6)
const four3 = {val: 4}//   /  \
const seven3 = {val: 7}// (4) (7)

five3.left = one3
five3.right = six3

six3.left = four3
six3.right = seven3

console.log(five3, 'tree 3')

// invalid subtree
const five4 = {val: 5}// (5) root
const one4 = {val: 1}//  / \
const six4 = {val: 6}// (1) (6)
const seven4 = {val: 7}//   / \
const eight4 = {val: 8}//  (7) (8)

five4.left = one4
five4.right = six4

six4.left = seven4
six4.right = eight4

console.log(five4, 'tree 4')

// 5, 1, 7, 8
// Valid
const five5 = {val: 5}//   (5) root
const one5 = {val: 4}//    / \
const seven5 = {val: 7}// (1) (7)
const eight5 = {val: 8}//     / \
const six5 = {val: 6}     //(6)  (8)

five5.right = seven4
five5.left = one4

seven5.left = six4
seven5.right = eight4

console.log(five5, 'tree 5')

/*
var isValidBST = function(root) {

  function dfs(node) {
  if (!root) return false
  if (root.left.val <= root.val <= root.right.val) return true
  isValidBST(root.right)
  isValidBST(root.left)
  }

  return dfs(root)
};*/

var isValidBST = function(root) {
  if (!root) {
    return true
  }

  function helper(root, min, max) {
    if (!root) {
      return true
    }

    if ((min !== null && root.val <= min) || (max !== null && root.val >= max)) {
      return false
    }

    return helper(root.left, min, root.val) && helper(root.right, root.val, max)
  }
  
  return helper(root, null, null)
}

console.log(isValidBST(two1), true)
console.log(isValidBST(five2), false)
console.log(isValidBST(five3), false)
console.log(isValidBST(five4), false)
console.log(isValidBST(five5), true)
