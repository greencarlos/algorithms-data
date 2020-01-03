// https://leetcode.com/problems/find-mode-in-binary-search-tree/

/* Given a binary search tree (BST) with duplicates, 
find all the mode(s) (the most frequently occurred element) in the given BST.

Assume a BST is defined as follows:

The left subtree of a node contains only nodes with keys less than or equal to the node's key.
The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
Both the left and right subtrees must also be binary search trees.

For example:
Given BST [1,null,2,2],

   1
    \
     2
    /
   2


return [2].

Note: If a tree has more than one mode, you can return them in any order.
*/

const one = {val: 1}
const two = {val: 2}
const two2 = {val: 2}

one.right = two
two.left = two2

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
 */
var findMode = function(root) {
  const hash = {}

  const dfs = (node) => {
    if (!node) return
    hash[node.val] = (hash[node.val] || 0) + 1
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  const sorted = []

  Object.keys(hash).forEach(key => {
    const count = hash[key]

    sorted.push({key, count})
  })

  return sorted.sort((a,b) => b.count - a.count)
  .filter(x => x.count === sorted[0].count)
  .map(v => v.key)
};

console.log(findMode(one))

