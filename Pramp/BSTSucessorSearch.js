/********************************************************
 * CODE INSTRUCTIONS:                                   *
 * 1) The method findInOrderSuccessor you're asked      *
 *    to implement is located at line 26.               *
 * 2) Use the helper code below to implement it.        *
 * 3) In a nutshell, the helper code allows you to      *
 *    to build a Binary Search Tree.                    *
 * 4) Jump to line 94 to see an example for how the     *
 *    helper code is used to test findInOrderSuccessor. *
 ********************************************************/

// Constructor to create a new Node
function Node(key) {
    this.key = key;
    this.parent = null;
    this.left = null;
    this.right = null;
}

// Constructor to create a new BST 
function BinarySearchTree() {
    this.root = null;
}

/*
 
In this diagram, the inorder successor of 9 is 11 
and the inorder successor of 14 is 20.

Starting from our inputNode
  
  traverseDown 
  - if node.key <= inputNode.key
    traverse right
    
  - if our node.key > inputNode.key
    traverse left
    
    so when we hit the child node, we can return it's key value
    
  travrseUp
    - if our node.key matches our inputNode.key
    and our inputNode has no children
    
    - move up the tree until we hit a value 
    greater than our inputNode.key
    return that node's key
*/

BinarySearchTree.prototype.findInOrderSuccessor = function(inputNode) {
  let success = -1

  const inorder = node => {
    if (!node) return
    if (node.key > inputNode.key) {
      success = node
      inorder(node.left)
    }
    
    if (node.key <= inputNode.key) {
      inorder(node.right) 
    }
  }
  
  inorder(this.root)
  console.log(success.key, 'success')
  return success
}

// Creates a new node by a key and inserts it to the BST
BinarySearchTree.prototype.insert = function(key) {

    var root = this.root;

    // 1. If the tree is empty, create the root
    if(!root) {
        this.root = new Node(key);
        return;
    }

    // 2) Otherwise, create a node with the key
    //    and traverse down the tree to find where to
    //    to insert it
    var currentNode = root;
    var newNode = new Node(key);

    while(currentNode !== null) {
        if(key < currentNode.key) {
            if(!currentNode.left) {
                currentNode.left = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.left;
            }
        } else {
            if(!currentNode.right) {
                currentNode.right = newNode;
                newNode.parent = currentNode;
                break;
            } else {
                currentNode = currentNode.right;
            }
        }
    }
}

// Returns a reference to a node in the BST by its key.
// Use this fuction when you need a node to test your 
// findInOrderSuccessor function on. 
BinarySearchTree.prototype.getNodeByKey = function(key) {
    var currentNode = this.root;

    while(currentNode) {
        if(key === currentNode.key) {
            return currentNode;
        }

        if(key < currentNode.key) {
            currentNode = currentNode.left;
        }
        else {
            currentNode = currentNode.right;
        }
    }

    return null;
}

/*********************************************
 * Driver program to test above function     *
 *********************************************/

// Create a Binary Search Tree
var bst = new BinarySearchTree();
bst.insert(20);
bst.insert(9);
bst.insert(25);
bst.insert(5);
bst.insert(12);
bst.insert(11);
bst.insert(14);

// Get a reference to the node whose key is 9
var test = bst.getNodeByKey(9);
var test2 = bst.getNodeByKey(14)

// Find the in order successor of test
var succ = test ? bst.findInOrderSuccessor(test) : null;
var succ2 = test2 ? bst.findInOrderSuccessor(test2) : null;

// Print the key of the successor node
if(succ) {
    console.log("Inorder successor of " + test.key + " is " + succ.key);
    console.log("Inorder successor of " + test2.key + " is " + succ2.key)
} else {
    console.log("Inorder successor does not exist");
}

