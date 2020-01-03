// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

/*
Given a n-ary tree, find its maximum depth.

The maximum depth is the number of nodes along the
longest path from the root node down to the farthest leaf node.

For example, given a 3-ary tree:
           
           1
         / | \
        3  2  4
       / \
      5   6 

Depth: 3
  */ 

/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
**/

/**
 * @param {Node} root
 * @return {number}
**/

var maxDepth = function(root) {
  let depth = 0, currLevel = []
  console.log(root)
  if (root !== null)
    currLevel.push(root)
  while(currLevel.length > 0) {
    depth += 1
    let len = currLevel.length
    while(len > 0) {
      let node = currLevel.shift()
      for (let i = 0; i < node.children.length; i++) {
        currLevel.push(node.children[i])
      }
      len -= 1
    }
  }
  return depth
};

