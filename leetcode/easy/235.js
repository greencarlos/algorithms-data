// https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// --- Lowest common ancestor binary tree ---

/* 2) Given a binary search tree and two nodes,
n1 and n2 in the tree, find the lowest common ancestor of the two given nodes.*/

// Tree node definition
function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

// example tree
//        5
//       / \
//      3   7
//    /  \ /  \
//   2   4 6  8
//  /
// 1

// building the tree
let n1 = new Node(1);
let n2 = new Node(2);
let n3 = new Node(3);
let n4 = new Node(4);
let n5 = new Node(5);
let n6 = new Node(6);
let n7 = new Node(7);
let n8 = new Node(8);

n5.left = n3;
n5.right = n7;

n3.left = n2;
n3.right = n4;

n7.left = n6;
n7.right = n8;

n2.left = n1;

// invoke lowestCommonAncestor
let result = lowestCommonAncestor(n5, n2, n1);

// function interface
function lowestCommonAncestor(root, p, q){
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
  } else {
    return root
  }
}

//console.log(n5, 'node 1', 2)
console.log(result, 'result')

// should return node 2, i.e n2
//expect(result).toBe(n2);
