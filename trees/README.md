# Tree

******************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting ** the group :) Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************

******************
* Questions
*******************
Implement in-order, pre-order, post-order, and breadth first search of a tree.

Use this tree for testing:
            1
         /     \
       2       3
    /  \      /    \
   4   5     6   7

function Node(value) {
  this.data = value;
  this.left = null;
  this.right = null;
}

let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(3);
let node4 = new Node(4);
let node5 = new Node(5);
let node6 = new Node(6);
let node7 = new Node(7);


let rootNode = node1;

node1.left = node2;
node2.right = node3;

node2.left = node4;
node2.right = node5;

node3.left = node6;
node3.right = node7;

function inOrder(node) {
  …
}

inOrder(rootNode);    //4, 2, 5,1, 6, 3, 7


Given a tree, check whether it is a binary search tree.


**************
* Solution (copy and paste your solution here with your name on it)
**************
/*Jack*/

function inOrder(node) {
  If (node) {
    // visit left subtree
    inOrder(node.left);
    
    // visit current node;
    console.log(node.data);

    // visit right node / subtree
    inOrder(node.right);
  }
}

function preOrder(node) {
  If (node) {
    // visit current node;
    console.log(node.data);

    // visit left subtree
    preOrder(node.left);
   
    // visit right node / subtree
    preOrder(node.right);
  }
}



function postOrder(node) {
  If (node) {
    // visit left subtree
    postOrder(node.left);
   
    // visit right node / subtree
    postOrder(node.right);

    // visit current node;
    console.log(node.data);
  }
}


/**
 *BFS Java solution
*/ 
public void BFS(TreeNode node) {
            if (node == null) return;
            Queue<TreeNode> nodes = new ArrayDeque<>();
            nodes.add(node);
            while (!nodes.isEmpty()) {
                TreeNode currentNode = nodes.poll();
                System.out.println(currentNode.value);
                if (currentNode.left != null) {
                    nodes.add(currentNode.left);
                }
                if (currentNode.right != null) {
                    nodes.add(currentNode.right);
                }

            }

        }



/* Jack */
function bfs(node) {
    let queue = [],
         currentNode = null;

  queue.push(node);
  
  while (queue.length) {
    currentNode = queue.shift();
    
      console.log(currentNode.data);
      
     if (currentNode.left) queue.push(currentNode.left);
     if (currentNode.right) queue.push(currentNode.right);
    }
  }
}



