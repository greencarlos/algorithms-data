function TreeNode(val, left, right) {
  this.val = val;
  this.left = left ? left : null;
  this.right = right ? right : null;
}

/*
Binary tree. Each node has one integer
Two methods

Serialize this binary tree into a string. 
You can define string format.  
Deserialize the string into binary tree.

Given a binary tree, we need to convert the nodes into a string
and the string need to convert back into the exact same binary
search tree

          1
         / \
        4   3
       / \ / \
      n  8 9 -10
*/

const ten = new TreeNode(-10);
const nine = new TreeNode(9);
const eight = new TreeNode(8);

const three = new TreeNode(3, nine, ten);
const four = new TreeNode(4, null, eight);
const one = new TreeNode(1, four, three);

/**
 * Encodes a tree to a single string.
 * @param {TreeNode} root
 * @return {string}
 **/

var serialize = function(root, result = []) {
  if (root) {
    result.push(root.val);
    result.push(...serialize(root.left));
    result.push(...serialize(root.right));
  } else {
    result.push(null);
  }
  return result;
};

console.log(serialize(one));

/**
 * Decodes your encoded data to tree.
 * @param {string} data
 * @return {TreeNode}
 **/

var deserialize = function(data = []) {
  let val = data.shift();
  if (val == null) return null;
  let node = new TreeNode(val);
  node.left = deserialize(data);
  node.right = deserialize(data);
  return node;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 **/

console.log(deserialize(serialize(one)));
