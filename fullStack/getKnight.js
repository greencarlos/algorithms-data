/*Given a square chessboard of N x N size, the position of Knight and position of a target is given.We need to find out minimum steps a Knight will take to reach the target position.
Function interface:
function getKnightMinStep(N, source, dest) {...}

Example Input:
var source = [0,0];
var dest = [7,7];
console.log(getKnightMinStep(8, source, dest));

Approach:
Starting point - 1 starting point.
Edges - 8
Traversal - BFS
Cycle - 2d matrix
*/




[
    [0,0,0,0,0,0,0,0],
    [0,0,0,p,0,p,0,0],
    [0,0,p,0,0,0,p,0],
    [0,0,0,0,k,0,0,0],
    [0,0,p,0,0,0,p,0],
    [0,0,0,p,0,p,0,0],
    [0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0],
]

function getKnightMinStep(N, source, dest) {
	let queue = [];
 	let currentNode = null;

}
Question 1)
function getKnightMinStep(N, source, dest) {
 let queue = [];
 let currentNode = null;
 let currentElem = null;
 let counter = 0;
 let visitedChess = []; // visit state
 let xOffset = [2, 2, -2, -2, 1, 1, -1, -1];
 let yOffset = [1, -1, 1, -1, 2, -2, 2, -2];

 // init
 queue.push([source, 0]);

 for (let i = 0; i < N; i++) {
   visitedChess.push([]);
 }

 visitedChess[source[0]][source[1]] = true;

 while (queue.length) {
   currentElem = queue.shift();
   currentNode = currentElem[0];
   counter = currentElem[1];

   // visit the current node and check something
   if (currentNode[0] === dest[0] && currentNode[1] === dest[1]) {
     return counter;
   }

   //
   for (let i = 0, l = xOffset.length; i < l; i++) {
     let neighborNode = [currentNode[0] + xOffset[i],
       currentNode[1] + yOffset[i]]; // [x, y]

     let x = neighbor[0];
     let y = neighbor[1];
    
     if (x >= 0 && x < N && y >= 0 && y < N && !visitedChess[x][y]) {
       queue.push([neighbor, counter + 1]);
       visitedChess[x][y] = true;
     }
   }
 }
}

