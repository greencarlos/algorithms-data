// https://leetcode.com/problems/path-sum-iii/

/* You are given a binary tree in which each node contains an integer value.
Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf,
but it must go downwards (traveling only from parent nodes to child nodes).
The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \ 
3  -2   1

Return 3. The paths that sum to 8 are*/

const ten = {val: 10}
const five = {val: 5}
const negThree = {val: -3}
const three = {val: 3}
const two = {val: 2}
const eleven = {val: 11}
const three2 = {val: 3}
const negTwo = {val: -2}
const one = {val: 1}

ten.left = five
ten.right = negThree

negThree.right = eleven

five.left = three
five.right = two

two.right = one

three.left = negThree
three.right = negTwo

negThree.left = null
negThree.right = null

one.left = null
one.right = null

eleven.left = null
eleven.right = null

var pathSum = function(root, sum) {
  if (!root) return 0
  return sumHelper(root, 0, sum) + pathSum(root.left, sum) + pathSum(root.right, sum)
};

let sumHelper = (root, pre, sum) => {
  if (!root) return 0
  let total = pre + root.val
  return (total === sum) + sumHelper(root.left, total, sum) + sumHelper(root.right, total, sum)
}

console.log(pathSum(ten, 8))
