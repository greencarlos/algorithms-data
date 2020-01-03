// https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/

/*
Given an array arr of positive integers, consider all binary trees such that:

Each node has either 0 or 2 children;
The values of arr correspond to the values of each leaf
in an in-order traversal of the tree.

(Recall that a node is a leaf if and only if it has 0 children.)
The value of each non-leaf node is equal to the product of 
the largest leaf value in its left and right subtree respectively.

Among all possible binary trees considered, 
return the smallest possible sum of the values of each non-leaf node.
It is guaranteed this sum fits into a 32-bit integer. 

Example 1:

Input: arr = [6,2,4]

Output: 32

Explanation:
There are two possible trees.
The first has non-leaf node sum 36, and the second has non-leaf node sum 32.

    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4 

*/ 
/**
 * @param {number[]} arr
 * @return {number}
**/

var mctFromLeafValues = function(arr) {
  let st = [Number.MAX_VALUE]
  let res = 0;
  arr.forEach(a => {
    let len = st.length;
    if (st[len - 1] === a) {
      res += a * a;
    } else if (st[len - 1] > a) {
      st.push(a)
    } else {
      while(st[st.length - 1] <= a) {
        let mid = st.pop()
        let left = st[st.length - 1]
        res += mid * Math.min(a, left)
      }
      st.push(a)
    }
  })
  while (st.length > 2) {
    res += st.pop() * st[st.length - 1]
  }
  return res
};

const arr1 = [6,2,4]
const arr2 = [6, 2, 4, 5, 7]
console.log(mctFromLeafValues(arr1), 32)
