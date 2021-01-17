// https://leetcode.com/problems/serialize-and-deserialize-binary-tree/submissions/

function TreeNode(val, left, right) {
  this.val = val ? val : 0;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

var serialize = function(root) {
  const result = [];

  const preorder = node => {
    if (!node) {
      result.push(null);
      return;
    }
    result.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };

  preorder(root);
  return result;
};

var deserialize = function(data) {
  const val = data.shift();
  if (val == null) return null;
  const node = new TreeNode(val);

  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};

/*
     1
    / \
   2   3
      / \
     4   5
*/

const five = new TreeNode(5)
const four = new TreeNode(4)
const three = new TreeNode(3, four, five)

const two = new TreeNode(2)
const one = new TreeNode(1, two, three)

console.log(deserialize(serialize(one)))

