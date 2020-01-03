// https://leetcode.com/problems/average-of-levels-in-binary-tree/

/*
Given a non-empty binary tree, return the average value 
of the nodes on each level in the form of an array.

Example 1:
Input:
    3
   / \
  9  20
    /  \
   15   7

Output: [3, 14.5, 11]

Explanation:
The average value of nodes on level 0 is 3,
on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
**/

const a = {val:3}//      (3)
const b = {val:9}//     /  \
const c = {val:20}//  (9)  (20)
const d = {val:15}//       /  \
const e = {val:7}//     (15)  (7)

a.left = b;
a.right = c;

c.left = d;
c.right = e;

// BFT

// add the rows and 
// calculate the average

// push that into the completed array
var averageOfLevels = function(root) {
  let res = []
  if (!root) return res
  let queue = [root]

  while(queue.length) {
    let size = queue.length;
    let sum = 0
    for (let i = 0; i < size; i++) {
      let head = queue.shift();
      sum += head.val
      if (head.left) queue.push(head.left)
      if (head.right) queue.push(head.right)
    }
    res.push(sum/size)
  }
  return res
};

console.log(averageOfLevels(a))
console.log("Output: [3, 14.5, 11]")
