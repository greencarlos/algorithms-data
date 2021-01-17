function TreeNode(val, left, right) {
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

/*

Given the function, shouldBeErased() return the independent
root nodes of trees from a binary tree.

Input:
      1 -> 1 should be deleted
     / \
    2   3
   / \   \
  4   5   6 -> 4 should be deleted
 / \
7   8 -> 8 should be deleted 
     \
      19
      / \
     20  21


Output:
[{2}, {3}, 19]
*/

const twentyOne = new TreeNode(21);
const twenty = new TreeNode(20);
const nineTeen = new TreeNode(19, twenty, twentyOne);

const seven = new TreeNode(7);
const six = new TreeNode(6);
const five = new TreeNode(5);

const eight = new TreeNode(8, null, nineTeen);
const four = new TreeNode(4, seven, eight);
const three = new TreeNode(3, null, six);

const two = new TreeNode(2, four, five);
const one = new TreeNode(1, two, three);

// console.log(one, 'one')

/*
console.log(one, 'one')

const preorder = node => {
  if (!node) return 
  console.log(node.val, 'val')
  preorder(node.left)
  preorder(node.right)
}

console.log(preorder(one), [1, 2, 4, 7, 20, 19, 21, 8, 5, 3, 6])
*/

const shouldBeErased = node => {
  const arr = [1, 4, 8];
  return arr.includes(node.val);
};

const solution = root => {
  if (!root) return [];
  const queue = [root];
  const visited = new Set();
  const result = [];

  while (queue.length !== 0) {
    const curr = queue.shift();

    if (curr.left) {
      queue.push(curr.left);
    }
    if (curr.right) {
      queue.push(curr.right);
    }

    if (shouldBeErased(curr)) {
      continue;
    }

    if (visited.has(curr)) {
      continue;
    }

    visited.add(curr);
    visited.add(curr.left);
    visited.add(curr.right);

    result.push(curr);
  }

  console.log('root', root)
  return result;
};

console.log(solution(one), [2, 3, 19]);
