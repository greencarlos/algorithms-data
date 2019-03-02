/* 2) Given two binary trees (root node), 
write a function to check if they are equal or not. 

Two binary trees are considered equal if 
they are structurally identical and the nodes have the same value.

  (root1)            (root2)
     1                  a(1)
   /   \              /     \
  2     3           b(2)    c(3)
 / \   /  \        /   \    /    \
4   5 6    7    d(4) e(5) f(6)  g(7)

Output: true
*/


function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

// Create Nodes

let node1 = new Node(1);
let nodea = new Node(1);

let node2 = new Node(2);
let nodeb = new Node(2);

let node3 = new Node(3);
let nodec = new Node(3);

let node4 = new Node(4);
let noded = new Node(4);

let node5 = new Node(5);
let nodee = new Node(5);

let node6 = new Node(6);
let nodef = new Node(6);

let node7 = new Node(7);
let nodeg = new Node(7);


// Root Nodes

let root1 = node1;
let root2 = nodea;


// Link Nodes

node1.left = node2;
node1.right = node3;

nodea.left = nodeb;
nodea.right = nodec;

node2.left = node4;
node2.right = node5;

nodeb.left = noded;
nodeb.right = nodee;

node3.left = node6;
node3.right = node7;

nodec.left = nodef;
nodec.right = nodeg;




function isSameTree(p, q) {
  if (!p || !q || (p.data !== q.data)) return true;
  isSameTree(p.left, q.left);
  console.log(p.data, q.data);

  if (p.data !== q.data) return false;

  isSameTree(p.right, p.left);
}

console.log(isSameTree(root1, root2)); // return true
