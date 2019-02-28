/*
Example:
Let’s say you have this linked list:
10  ->  7  ->  5  ->  3  -> 1

Given a node with the data 5, you want to remove the node after it, which has the data 3.

After removing the node, the linked list becomes:
10  ->  7  ->  5  -> 1
*/

function LinkedListNode(value) {
  this.data = value;
  this.next = null;
}

// Test code:
let node10 = new LinkedListNode(10);
let node7 = new LinkedListNode(7);
let node5 = new LinkedListNode(5);
let node3 = new LinkedListNode(3);
let node1 = new LinkedListNode(1);

// connecting nodes
node10.next = node7;
node7.next = node5;
node5.next = node3;
node3.next = node1;

console.log(deleteNode(node5));

console.log(" ");

/*
console.log(node10);
console.log(node7);
console.log(node5);
*/

function deleteNode(node) {
  node.next = node && node.next && node.next.next || null;
}

/*
function deleteNode(node) {
 if (!node) return;
 if (node.next === node) delete node; 
 deleteNode(node.next);
}
*/

console.log("node 10 =", node10);
console.log(" ");
console.log("node 7 =", node7);
console.log(" ");
console.log("node 5 =", node5);
console.log(" ");
console.log("node 3 =", node3); 
console.log(" ");
console.log("node 1 =", node1);
