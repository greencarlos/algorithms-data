function TreeNode(val, left, right) {
  this.val = val ? val : 0
  this.right = right ? right : null
  this.left = left ? left : null
}

/*
      1
     / \
    2   3
   / \ / \
  4  5 6  7
 
 */

const seven = new TreeNode(7)
const six = new TreeNode(6)
const five = new TreeNode(5)

const four = new TreeNode(4)
const three = new TreeNode(3, six, seven)
const two = new TreeNode(2, four, five)

const one = new TreeNode(1, two, three)

const inorderRec = node => {
  if (!node) return
  inorderRec(node.left)
  console.log('rec', node.val)
  inorderRec(node.right)
}

const inorderIte = node => {
  let stack = [node];
  let visited = new Set();

  while (stack.length) {
    let pre = stack[stack.length-1];

    while (pre.left && !visited.has(pre.left)) {
      stack.push(pre.left);
      pre = pre.left;
    }

    let curr = stack.pop();
    visited.add(curr)
    console.log('ite',curr.val)

    if (curr.right) {
      stack.push(curr.right);
    }
  }
}

console.log('recursion', inorderRec(one))
console.log('-----')
console.log('iterative', inorderIte(one))
