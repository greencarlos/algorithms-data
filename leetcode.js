function TreeNode(val) {
  this.val = val;
  this.left = null;
  this.right = null;
}

/*

    (3)
    / \
  (9) (20)
      /  \
    (15) (7)
*/

const three = new TreeNode(3)
const nine = new TreeNode(9)
const twenty = new TreeNode(20)
const fifteen = new TreeNode(15)
const seven = new TreeNode(7)

three.left = nine
three.right = twenty

twenty.left = fifteen
twenty.right = seven

console.log(three, 'three')

/*
    (1)
    / \
  (2)  (3)
 /  \  /  \
(4)(5)(6) (7)
*/

const one2 = new TreeNode(1)
const two2 = new TreeNode(2)
const three2 = new TreeNode(3)
const four2 = new TreeNode(4)
const five2 = new TreeNode(5)
const six2 = new TreeNode(6)
const seven2 = new TreeNode(7)

one2.left = two2
one2.right = three2

two2.left = four2
two2.right = five2

three2.left = six2
three2.right = seven2

console.log(one2, 'one')

/**
BFS


**/
var verticalTraversal = function(root) {
  return -1
};

console.log(verticalTraversal(three))
console.log(verticalTraversal(one2))

