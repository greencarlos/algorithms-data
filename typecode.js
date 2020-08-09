/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 **/
// Time O(r * c) r = row, c = column
function gameOfLife(board) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      var liveCells = aliveNeighbors(board, i, j);
      if (board[i][j] === 1 && (liveCells < 2 || liveCells > 3)) {
        board[i][j] = 2;
      }
      if (board[i][j] === 0 && liveCells === 3) {
        board[i][j] = 3;
      }
    }
  }
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      board[i][j] %= 2;
    }
  }
}
var aliveNeighbors = function(board, i, j) {
  var count = 0;
  var indexes = [
    [1, -1],
    [1, 0],
    [1, 1],
    [0, -1],
    [0, 1],
    [-1, -1],
    [-1, 0],
    [-1, 1],
  ];
  for (var _i = 0, indexes_1 = indexes; _i < indexes_1.length; _i++) {
    var index = indexes_1[_i];
    if (
      index[0] + i < 0 ||
      index[0] + i > board.length - 1 ||
      index[1] + j < 0 ||
      index[1] + j > board[0].length - 1
    )
      continue;
    if (
      board[index[0] + i][index[1] + j] === 1 ||
      board[index[0] + i][index[1] + j] === 2
    )
      count++;
  }
  return count;
};

var input1 = [
  [0, 1, 0],
  [0, 0, 1],
  [1, 1, 1],
  [0, 0, 0],
];
var output1 = [
  [0, 0, 0],
  [1, 0, 1],
  [0, 1, 1],
  [0, 1, 0],
];

console.log(gameOfLife(input1));
console.log(' ');
console.log(output1);
