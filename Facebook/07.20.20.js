// Failed Facebook Phone Screen 07.07.20
// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/

// Binary tree. Node has one integer
// Two methods
// Serialize this binary tree into a string. You can define string format.
// Deserialize the string into binary tree.

//        1   
//     2     3
//   4          -10

// result = '1 2 4 null 3 null -10 '

//        1
//     2     3
// null  4     -10
//     9   7  8   null

function Node(val, left, right){
  this.val = val ? val : 0
  this.left = left ? left : null;
  this.right = right ? right : null
}

/*
preorder: root, left, right

  1st '1 2 4 null 3 null -10'
  2nd '1 2 null 4 3 null -10'
*/

// Time & Space O(n)
const serialze = (root) => {
  let result = ''
  
  const preorder = (node) => {
    if (!node) return
    result += node.val + ' '
    
    if (node.left && node.right === null)  {
      preorder(node.left)
      result += null + ' ' 
      return
    } else if (node.left === null && node.right) {
      result += null + ' '
      preorder(node.right)
      return
    }
    
    preorder(node.left)
    preorder(node.right)
  }
  
  preorder(root)
  return result
}

//        1   
//     2     3
//   n   n       -10
//                 9

// root = '1'
// result = '2 null null 3 null -10 null 9 null null'

/*

       1
     2   3
    n n n -10
           n 9
            n n
*/
// Time & Space O(n)
const deserialize = (str) => {
  
}
