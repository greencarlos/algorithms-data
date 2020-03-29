function TreeNode(val) {
  this.val = val;
  this.left = null 
  this.right = null;
}

var largestValues = function(root) {
  return -1
};

const one = new TreeNode(1)
const three = new TreeNode(3)
const two = new TreeNode(2)
const five = new TreeNode(5)
const three2 = new TreeNode(3)
const nine = new TreeNode(9)

one.left = three
one.right = two

three.left = five
three.right = three2

two.right = nine

/*
Input: 

          1
         / \
        3   2
       / \   \  
      5   3   9 

Output: [1, 3, 9]
*/

console.log(one, 'root')
console.log(" ")
console.log(largestValues(one), [1, 3, 9])
