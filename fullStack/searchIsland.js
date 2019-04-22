/*
In Microsoft-Paint, when we take the brush to a pixel and click, the color of the region of that pixel is replaced with a new selected color. 
Given a 2D screen, location of a pixel in the screen and a color, replace color of the given pixel and all adjacent (top, bottom, left, and right) same colored pixels with the given color. Implement fillPaint function.
Function Interface:
function fillPaint(matrix, x, y, newColor) {...}

Example input:
let screen = [
  [0,0,1,1,1,1],
  [0,0,2,2,2,2],
  [1,1,1,1,1,1],
  [3,3,1,1,3,3],
  [0,0,0,3,3,0],
];
let x = 3;
let y = 4;
let newColor = 4;
fillPaint(screen, x, y, newColor); 
=> (output)
[
  [0,0,1,1,1,1],
  [0,0,2,2,2,2],
  [1,1,1,1,1,1],
  [3,3,1,1,4,4],
  [0,0,0,4,4,0],
]
Approach:
Starting point -
Edges -
Traversal -
Cycle -

*/

function searchIsland(matrix) {
 let visited = [];
 let N = matrix.length; // row
 let M = matrix[0].length; // column
 let xOffset = [0, 0, 1, 1, 1, -1, -1, -1];
 let yOffset = [1, -1, 1, 0, -1, 1, 0, -1];
 let counter = 0;

 // init visited
 for (let i = 0; i < N; i++) {
   visited.push([]);
 }

 let searchIslandNode = function(node) {
   // do something here
   visited[node[0]][node[1]] = true;

   for (let i = 0, l = xOffset.length; i < l; i++) {
     let newX = node[0] + xOffset[i];
     let newY = node[1] + yOffset[i];

     if (matrix[newX][newY] && !visited[newX][newY] &&
       newX >=0 && newX < N && newY >= 0 && newY < M) {
         searchIslandNode([newX, newY]);
       }
   }
 }

 // how do you visit all the nodes?
 for (let i = 0; i < N; i++) {
   for (let j = 0; j < N; j++) {
     let currentNode = [i,j];

     if (!visited[i][j] && matrix[i][j]) {
       counter++;
       searchIslandNode([i, j]);
     }
   }
 }

 return counter;

}

matrix = [
  [1,1,0,0,0],
  [0,1,0,0,1],
  [1,0,0,1,1],
  [0,0,0,0,0],
  [1,0,1,0,1],
];

searchIsland(matrix)  // output: 5

matrix = [
  [1,1,0,0,0],
  [0,1,0,0,1],
  [1,0,0,1,1],
  [0,0,0,0,0],
  [1,0,1,0,1],
];

searchIsland(matrix)  // output: 5






