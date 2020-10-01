function TreeNode(val, left, right) {
  this.val = val;
  this.left = left ? left : null;
  this.right = right ? right : null;
}
/*
Binary tree. Node has one integer
Two methods

Serialize this binary tree into a string. 
You can define string format.  Deserialize the string into binary tree.

What is going on?

I'm never going to fail that interview question again lol...

Given a binary tree, we need to convert the nodes into a string
and the string need to convert back into the exact same binary
search tree

Given:
          1
         / \
        4   3
         \ / \
         8 9  -10

The best way to keep the correct of the nodes would be to add 
the root node to the string first and then traverse.
The best way to do this recursively would be preorder traversal.

preorder: root, left, right

result = '1 4 null 8 3 9 -10'


Now, given out result we need to turn it back into a binary tree.
To do this we would have to augment out input a little bit.

The best way to not lose track of our left and right values
is to get our string as close to a complete tree as possible.
This includes null values. 

n -> null

          1
         / \
        4   3
       / \ / \
     n   8 9  -10
        /\ /\  /\
       n nn n n n

Still doing our preorder traversal our result is:

result = '1 4 null 8 null null 3 9 null null -10 null null'

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

var serialize = function(root, res = []) {
  const preorder = node => {
    if (!node) {
      res.push(null);
      return;
    }
    res.push(node.val);
    preorder(node.left);
    preorder(node.right);
  };

  preorder(root);
  return res;
};

const treeString = serialize(one);

console.log(treeString);
console.log('1 4 null 8 null null 3 9 null null -10 null null');
console.log(' ');

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

const binaryTree = deserialize(serialize(one));
console.log('deserialized', binaryTree);
console.log(one);
