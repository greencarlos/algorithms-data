Graphs

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
1. Do a breadth first search of a binary tree. Return the keys in an array. 
Hint: use a queue to help with your traversal.

Example:

Let's say we have this tree:

let Node = function(value) {
  this.data = value;
  this.left = null;
  this.right = null;
};

let nodeA = new Node(0);
let nodeB = new Node(1);
let nodeC = new Node(2);
let nodeD = new Node(3);
let nodeE = new Node(4);
let nodeF = new Node(5);
let nodeG = new Node(6);

let tree = nodeA;

nodeA.left = nodeB;
nodeA.right = nodeC;

nodeB.left = nodeD;
nodeB.right = nodeE;

nodeC.left = nodeF;
nodeC.right = nodeG;

bfs(tree)  // [0, 1, 2, 3, 4, 5, 6]

2. Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:  Only one letter can be changed at a time. Each transformed word must exist in the word list. Note that beginWord is not a transformed word. Note:  Return 0 if there is no such transformation sequence. All words have the same length. All words contain only lowercase alphabetic characters. You may assume no duplicates in the word list. You may assume beginWord and endWord are non-empty and are not the same.   
Example 1:  Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]  Output: 5  Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5. Example 2:  Input: beginWord = "hit" endWord = "cog" wordList = ["hot","dot","dog","lot","log"]  Output: 0  Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

**************
* Solution (copy and paste your solution here with your name on it)
**************


*** Jack ***
1)
function bfs(node) {
 // your code here
 let result = [];
 let queue = [];
 let currentNode = null;

 queue.push(node);
 while (queue.length) {
   currentNode = queue.shift();

   // queue up nodes to be processed later
   if (currentNode.left) {
     queue.push(currentNode.left);
   }

   if (currentNode.right) {
     queue.push(currentNode.right);
   }

   result.push(currentNode.data);
 }

 return result;
}


*** Jack ***
2)
function findShortestWordLadderDistance(start, end, wordList) {
 if (start === end) return 0;
 if (start.length != end.length) return -1;

 let alphabet = "abcdefghijklmnopqrstuvwxyz";
 let queue = [start];
 let distance = 1;
 let neighbors = [];
 let toBeVisited = new Set(wordList);
 toBeVisited.delete(start);
  while (queue.length > 0) {
   for (let i = 0, length = queue.length; i < length; i++) {
     let next = queue.shift();
    
     neighbors = generateNeighbors(next, alphabet, toBeVisited);
     for (let j = 0, m = neighbors.length; j < m; j++) {
       let neighbor = neighbors[j];
       if (neighbor === end) return distance + 1;

       queue.push(neighbor);
       toBeVisited.delete(neighbor);
     }
   }
   distance++;
 }
 return -1;
}

function generateNeighbors(word, alphabet, toBeVisited) {
 let chars = word.split("");
 let result = [];

 for (let i = 0; i < chars.length; i++) {
   let char = chars[i];
  
   for (let j = 0; j < alphabet.length; j++) {
     chars[i] = alphabet[j];
     neighbor = chars.join("");
     if (toBeVisited.has(neighbor)) result.push(neighbor);
   }
   chars[i] = char;
 }

 return result;
}

console.log(findShortestWordLadderDistance("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // 5

console.log(findShortestWordLadderDistance("hit", "cog", ["hot","dot","dog","lot","log"])); // -1


// Ladarius Greene
1).
function bfs(tree) {
queue = [];
queue.push(tree[0]);
while(queue.length > 0) {
       for(var i = 0; i < queue.length; i++) {
       currentNode = queue[i];
       console.log(currentNode);
       if(currentNode.left) {
           queue.push(currentNode.left);
           }
       if(currentNode.right) {
           queue.push(currentNode.right);
           }
       }
   }
};






*******
Jack
********
3) BFS on a graph

function GraphNode(value) {
 this.data = value;
 this.adjacent = [];
}

let g1 = new GraphNode(1);
let g2 = new GraphNode(2);
let g3 = new GraphNode(3);
let g4 = new GraphNode(4);
let g5 = new GraphNode(5);
let g6 = new GraphNode(6);
let g7 = new GraphNode(7);
let g8 = new GraphNode(8);
let g9 = new GraphNode(9);

g1.adjacent.push(g2);
g1.adjacent.push(g6);
g1.adjacent.push(g5);

g2.adjacent.push(g3);
g2.adjacent.push(g4);

g6.adjacent.push(g7);

g7.adjacent.push(g8);
g7.adjacent.push(g9);

function graphBfs(node) {
 // your code here
 let result = [];
 let queue = [];
 let currentNode = null;

 queue.push(node);
 while (queue.length) {
   currentNode = queue.shift();

   // queue up nodes to be processed later
   currentNode.adjacent.forEach((node) => {
     queue.push(node);
   })

   result.push(currentNode.data);
 }

 return result;
}

graphBfs(g1);


