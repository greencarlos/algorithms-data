/* 3) Given a binary search tree, return the vertical order 
traversal of its nodes' values.

(ie, column by column from left to right, and within 
a column from top to bottom).

If two nodes are in the same row and column 
(in example below: 9 and 12),

the order should be from left to right
(in example below: 9, then 12).
   
Example:
input:
            10
          /    \
        5       15
       /  \    /  \
      3   9  12    17
            /
           /         
         11    
    
output: [3, 5, 11, 10, 9, 12, 15, 17]
*/

function Node(value) {
  this.data = value;
  this.left = null;
  
}

// Create Nodes

let node10 = new Node(10);
let node5 = new Node(5);
let node15 = new Node(15);
let node3 = new Node(3);
let node9 = new Node(9);
let node12 = new Node(12);
let node17 = new Node(17);
let node11 = new Node(11);

// Root

let rootNode = node10;

// Link Nodes

node10.left = node5;
node10.right = node15;

node5.left = node3;
node5.right = node9;

node15.right = node17;
node15.left = node12;

node12.left = node11;


console.log(rootNode);
console.log("node 12 =", node12);

function verticalTree(node) {
  
}

console.log(verticalTree(rootNode));
