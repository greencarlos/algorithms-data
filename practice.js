"use strict"

const three = {val: 3};
const two = {val: 2};
const four = {val: 4};
const five = {val: 5};
const six = {val: 6};
const one = {val: 1};

three.left = two
three.right = four

two.left = five
two.right = six

four.right = one 

//     (3)
//     / \
//   (2)  (4)
//   / \    \
// (5)  (6)  (1)

// return 21
// should return root node value
    
const a = {val: -5};
const b = {val: 3};
const c = {val: 1};
const d = {val: 2};
const e = {val: 6};

a.left = b;
a.right = c;
b.left = d;
b.right = e;

//     (-5)
//     / \
//   (3) (1)
//   / \
// (2) (6)

// should return top level right node value
// return 11

const A = {val: -5};
const B = {val: 3};
const C = {val: 1};
const D = {val: 2};
const E = {val: 6};
const F = {val: 600};

A.left = B;
A.right = C;
B.left = D;
B.right = E;
C.right = F;

//       (-5)
//       /  \
//     (3)  (1)
//     /    / \
//   (600)(2) (6)

// return 607
    
const a3 = {val: -50};
const b3 = {val: 3};
const c3 = {val: 1};
const d3 = {val: 2};
const e3 = {val: 6};
const f3 = {val: 600};

a3.left = b3;
a3.right = c3;
b3.left = d3;
b3.right = e3;
c3.right = f3;

//      (-50)
//      /   \
//    (3)   (1)
//    / \     \
//  (2) (6)   (600)

// return 601
// should return mid level right node value

/* Biggest subtree value
Given a binary tree,
return the sum of the values of the biggest subtree
*/

// root 1
//     (3)
//     / \
//   (2)  (4)
//   / \    \
// (5)  (6)  (1)

// root 2
//     (-5)
//     / \
//   (3) (1)
//   / \
// (2) (6)

// root 3
//      (-50)
//      /   \
//    (3)   (1)
//    / \     \
//  (2) (6)   (600)

// root 4
//      (-50)
//      /   \
//    (3)   (1)
//    / \     \
//  (2) (6)   (600)

const solution = (root) => {
  let count = 0

  const dfs = (node) => {
    if (!node) return
    //count += node.val
    count += Math.abs(node.val)
    dfs(node.left)
    dfs(node.right)
  }

  dfs(root)
  return count
}

console.log(three, 'root 1')
console.log(" ")
console.log(solution(three), 21)
console.log(solution(a), 11)
console.log(solution(A), 607)
//console.log(solution(a3), 601)
