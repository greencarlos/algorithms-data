// https://leetcode.com/problems/word-search/ 

/* Given a 2D board and a word, find if the word exists in the grid.
The word can be constructed from letters of sequentially adjacent cell, 
where "adjacent" cells are those horizontally or vertically neighboring. 

The same letter cell may not be used more than once.

board = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.
*/

const board1 = [
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
];

const board2 = [
['F', 'A', 'C', 'I'],
['O', 'B', 'Q', 'P'],
['A', 'N', 'O', 'B'],
['M', 'A', 'S', 'S']
]

var exist = function(board, word) {
  if (board.length === 0) return false

  const h = board.length;
  const w = board[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]]

  const go = (x, y, k) => {
    if (board[x][y] !== word[k]) return false
    if (k === word.length - 1) return true

    board[x][y] = '*'
    for (const [dx, dy] of dirs) {
      const i = x + dx;
      const j = y + dy
      if (i >= 0 && i < h && j >= 0 && j < w) {
        if (go(i, j, k + 1)) return true
      }
    }
    board[x][y] = word[k]
    return false
  }

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (go(i, j, 0)) return true
    }
  }
  return false
};


const word1 = "ABCCED"
const word2 = "SEE"
const word3 = "ABCB"
// ----- GRID 2 ------
const word4 = "FOAM"


console.log(board1, ' board1')
console.log(word1, ' word1')
console.log(" ")
console.log(board2, ' board2')
console.log(word4, ' word4')
console.log(" ")

console.log(exist(board1, word1), true)
//console.log(exist(board1, word2), true)
console.log(exist(board1, word3), false)
console.log(" ")
console.log(exist(board2, word4), true)
