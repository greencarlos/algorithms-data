// https://leetcode.com/problems/binary-tree-level-order-traversal-ii/

/* Given a binary tree, return the bottom-up level order traversal 
of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree [3,9,20,null,null,15,7],
    3
   / \
  9  20
    /  \
   15   7
return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]
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
 * @return {number[][]}
**/

const a = {val: 3}
const b = {val: 9}
const c = {val: 20}
const d = {val: 15}
const e = {val: 7}

a.left = b 
a.right = c

c.left = d 
c.right = e

b.left = null
b.right = null

d.left = null
d.right = null

e.left = null
e.right = null

console.log(a, 'root 1')

const output1 = [
  [15, 7],
  [9, 20],
  [3]
]

var levelOrderBottom = function(root) {
    if (root === null) { return []; }
    let result = [];
    let queue = [root];
    while(queue.length > 0) {
        let size = queue.length;
        let current = [];
        for (let i = 0; i < size; i++) {
            console.log(queue, 'queue')
            let head = queue.shift();
            current.push(head.val);
            if(head.left !== null) { queue.push(head.left); }
            if(head.right !== null) { queue.push(head.right); }
        }
        result.unshift(current);
    }
    return result;
};

console.log(levelOrderBottom(a), output1)
