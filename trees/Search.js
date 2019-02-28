// Breath First Search

//      1
//    /   \
//   2      3
//  / \   /  \
// 4  5   6   7

// define the node
function Node(value) {
    this.data = value;
    this.left = null;
    this.right = null;
}

// create the nodes
let node1 = new Node(1);
console.log("node 1 = ",node1);
let node2 = new Node(2);
console.log("node 2 = ", node2);
let node3 = new Node(3);
console.log("node 3 = ", node3);
let node4 = new Node(4);
console.log("node 4 = ", node4);
let node5 = new Node(5);
console.log("node 5 = ", node5);
let node6 = new Node(6);
console.log("node 6 = ", node6);
let node7 = new Node(7);
console.log("node 7 = ", node7);

let rootNode = node1;

// link nodes together
node1.left = node2;
node1.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;



// left, root, right
function inOrder(node) {
    if(node) {
        // visit left subtree
        inOrder(node.left);

        // visit current node;
        console.log("inOrder = ", node.data);

        // visit right node / subtree
        inOrder(node.right);
    }
}

console.log(inOrder(rootNode));

console.log("----");

// root, left, right
function preOrder(node) {
    if(node) {

        // visit current node;
        console.log("preOrder =", node.data);

        // visit left subtree
        preOrder(node.left);

        // visit right node / subtree
        preOrder(node.right);
    }
}

console.log(preOrder(rootNode));

console.log("----");

// left, right, root
function postOrder(node) {
    if(node){
        // visit left subtree
        postOrder(node.left);

        // visit right node / subtree
        postOrder(node.right);

        // visit current node
        console.log("postOrder =", node.data);
    }
}

console.log(postOrder(rootNode));

console.log("----");

function BFS(node) {

    let queue = [],
        currentNode = null;

        queue.push(node);

        while(queue.length) {
            currentNode = queue.shift();

            console.log("Breath-First Search = ", currentNode.data);

            if (currentNode.left)queue.push(currentNode.left);
            if (currentNode.right)queue.push(currentNode.right);
        }
}

console.log(BFS(rootNode));
