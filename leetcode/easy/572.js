// https://leetcode.com/problems/subtree-of-another-tree/

/* Given two non-empty binary trees s and t, 
check whether tree t has exactly the same 
structure and node values with a subtree of s.

A subtree of s is a tree consists of a node in s
and all of this node's descendants. 
The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:

     3
    / \
   4   5
  / \
 1   2

Given tree t:
   4
  / \
 1   2
Return true, because t has the same structure and node values with a subtree of s.

Example 2:
Given tree s:

     3
    / \
   4   5
  / \
 1   2
    /
   0
Given tree t:
   4
  / \
 1   2

Definition for a binary tree node.
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
 }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
*/

// Example 1
const three1 = {val: 3} //   (3)
const four1 = {val: 4}//     /  \
const one1 = {val: 1}//    (4)  (5)
const two1 = {val: 2}//    / \    
const five1 = {val: 5}// (1)  (2)

three1.left = four1;
three1.right = five1;

four1.left = one1;
four1.right = two1;

const four2 = {val: 4}//   (4)
const one2 = {val: 1}//   /  \
const two2 = {val: 2}// (1)  (2)

four2.left = one2
four2.right = two2

// Example 2:
const three3 = {val: 3}//         3
const four3 = {val: 4}//         / \
const five3 = {val: 5}//        4   5
const one3 = {val: 1}//        / \
const two3 = {val: 2}//       1   2
const oneClone3 = {val: 1}//     /
const zero3 = {val: 0}//        0    

three3.left = four3
three3.right = five3

four3.left = one3
four3.right = two3

two3.left = zero3

var isSubtree = function(s, t) {
  if (!s || !t) {
    return !s && !t
  }
  if (s.val === t.val && isEqual(s, t)) {
    return true
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t)
};

function isEqual(t1, t2) {
  if (!t1 || !t2) {
    return t1 === t2
  }
  if (t1.val === t2.val) {
    return isEqual(t1.left, t2.left) && isEqual(t1.right, t2.right)
  }
  return false
}

console.log(three1, 'root 1')
console.log(four2, 'root 2')
console.log(three3, 'root 3')
console.log(" ")
console.log(isSubtree(three1, four2), true)
console.log(isSubtree(three3, four2), false)
