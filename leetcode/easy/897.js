// // https://leetcode.com/problems/increasing-order-search-tree/

/*  Given a binary search tree, 
rearrange the tree in in-order so that the leftmost node in 
the tree is now the root of the tree, and every node has no left child and only 1 right child.

Example 1:
Input: [5,3,6,2,4,null,8,1,null,null,null,7,9]

       5
      / \
    3    6
   / \    \
  2   4    8
 /        / \
1        7   9
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

five.left = three
five.right = six

three.left = two
three.right = four

two.left = one
six.right = eight

eight.left = seven
eight.right = nine

console.log(five, 'root 1')


/*
Output: [1,null,2,null,3,null,4,null,5,null,6,null,7,null,8,null,9]

 1
  \
   2
    \
     3
      \
       4
        \
         5
          \
           6
            \
             7
              \
               8
                \
                 9
*/

const a = {val: 1}
const b = {val: 2}
const c = {val: 3}
const d = {val: 4}
const e = {val: 5}
const f = {val: 6}
const g = {val: 7}
const h = {val: 8}
const i = {val: 9}

a.right = b
b.right = c
c.right = d
d.right = e
e.right = f
f.right = g

function TreeNode(val) {
 this.val = val;
 this.left = this.right = null;
}
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  let nodes = []
  dfs(root)
  let treeNode = new TreeNode(0)
  let current = treeNode 
  for (let i = 0; i < nodes.length; i++) {
    current.right = new TreeNode(nodes[i])
    current = current.right
  }

  return treeNode.right

  function dfs(root) {
    if (root != null) {
      dfs(root.left)
      nodes.push(root.val)
      dfs(root.right)
    }
  }
};

console.log(increasingBST(five), a)
