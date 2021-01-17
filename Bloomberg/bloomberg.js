// https://leetcode.com/problems/populating-next-right-pointers-in-each-node/

function TreeNode(val, left, right) {
    this.val = val ? val : 0
    this.left = left ? left : null
    this.right = right ? right : null
    this.next = null
}

function solution(root) {
  const queue = [[root, 1]]
  
  while(queue.length !== 0) {
    const [node, level] = queue.shift()
    
    if (node.left) {queue.push([node.left, level+1])}
    if (node.right) {queue.push([node.right, level+1])}
    
    if (queue.length !== 0 && queue[0][1] === level) {
        node.next = queue[0][0]
    }
  }
}

//       1
//      / \
//     2-> 3
//    /   / \
//   4-> 5-> 6

/*
Breath First Search Traversal
Time O(n) n = nodes in our binary tree
Space O(n) queue of nodes and level

Given a root node, we want to assign the next nodes
of our binary tree

   queue = [[node, level]]
    []
   
   current node
   [1, 1] skip node
   [2, 2] next node is 3
   [3, 2] skip node
   [4, 3] next node is 5
   [5, 3] next node is 6
   [6, 3] skip

level
1        1 -> null
        / \
2      2-> 3 -> null
      /   / \
3    4-> 5-> 6 -> null

Going over each node in our tree and we can keep track
of our levels. Using our queue, we can check if our 
current node and the next node in the queue have the same level

if they do, then we can assign our current node's next node to 
the next tree node in our queue
*/
