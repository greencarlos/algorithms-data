function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/*
Invert a binary tree.
Input:

     4
   /   \
  2     7
 / \   / \
1   3 6   9

Output:
     4
   /   \
  7     2
 / \   / \
9   6 3   1
*/

const four = new TreeNode(4)
const two = new TreeNode(2)

const seven = new TreeNode(7)
const one = new TreeNode(1)

const three = new TreeNode(3)
const six = new TreeNode(6)
const nine = new TreeNode(9)

four.left = two
four.right = seven

two.left = one
two.right = three

seven.left = six
seven.right = nine

// BFS / DFS

// at each node
// swap the left and right chidren

// Time O(n) = traverse each node
// Space O(h) h = call stack / height of the tree


/*
Runtime: 60 ms, faster than 20.93% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 34 MB, less than 20.00% of JavaScript online submissions for Invert Binary Tree.
*/

var invertTree = function(root) {
  if (!root) return root // emtpy tree
  // F.I.F.O line at the store
  const queue = [root]
  
  while(queue.length !== 0) {
    const current = queue.shift() // node
    
    if (current.left || current.right) {
      [current.left, current.right] = [current.right, current.left] // swap nodes
    }
    
    if (current.left) {queue.push(current.left)}
    if (current.right) {queue.push(current.right)}
  }
  
  console.log(root, 'result')
  return root
};

/*
Runtime: 60 ms, faster than 20.93% of JavaScript online submissions for Invert Binary Tree.
Memory Usage: 34.1 MB, less than 20.00% of JavaScript online submissions for Invert Binary Tree.
*/

/*
var invertTree = function(root) {
  if (!root) return root
  
  const dfs = (node) => {
    if (!node) return
    [node.left, node.right] = [node.right, node.left] // swap
    dfs(node.left)
    dfs(node.right)
  }
  
  dfs(root)
  console.log(root, 'swapped')
  return root
}
*/

console.log(invertTree(four))
/*
  1
 3 2

  1
 2 3

    (1)
    / \
   (2) (4)
        \
        (3)
        
    (1)
    / \
   (4) (2)
     \ 
     (3)
     
     (1)
     / \
   (4)  (2)
   /
  (3)  end result
*/
