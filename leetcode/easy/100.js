// https://leetcode.com/problems/same-tree/

const a = {val: 1}
const b = {val: 2}
const c = {val: 3}

a.left = b
a.right = c

//    (1)
//    / \
//  (2) (3)

const one = {val: 1}
const two = {val: 2}
const three = {val:3}

one.left = two
one.right = three

//    (1)
//    / \
//  (2) (3)

console.log(a, '', one)

const nice = {val: 10}
const tree = {val: 20}

nice.left = tree

var isSameTree = function(p, q) {
  if (!p && !q) {
    return true
  }
  if (!p || !q || p.val !== q.val) {
    return false
  }

  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

console.log(isSameTree(a, one), true)
console.log(isSameTree(a, nice), false)

