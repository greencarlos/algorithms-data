// https://leetcode.com/problems/second-minimum-node-in-a-binary-tree/
//

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

const two = {val: 2}
const two2 = {val: 2}
const five = {val: 5}
const five2 = {val: 5}
const seven = {val: 7}

two.left = two2
two.right = five

five.left = five2
five.right = seven


const n2 = {val: 2}
const node2 = {val: 2}
const nTwo = {val: 2}

n2.left = node2
n2.right = nTwo

const n1 = {val: 1}


var findSecondMinimumValue = function(root, val = root.val) {
  if (!root) return -1;
  if (val < root.val) return root.val
  let left = findSecondMinimumValue(root.left, val)
  let right = findSecondMinimumValue(root.right, val)
  if (left === -1 || right === -1) {
    return left === -1 ? right : left;
  } else {
    return Math.min(left, right)
  }
};

console.log(findSecondMinimumValue(two), 5)
console.log(findSecondMinimumValue(n2), -1)
console.log(findSecondMinimumValue(n1), -1)
