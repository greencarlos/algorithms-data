function sudokuSolve(board) {
  return  solve(board, 0, 0)  
}

var solve = function(board, row, col) {
  for (let i = row; i < 9; i++, col=0) {
    for (let j = col; j < 9; j++) {
      if (board[i][j] !== '.') continue
      
      for (let c = 1; c <= 9; c++) {
        if (isValid(board, i, j, c.toString())) {
          board[i][j] = c.toString()
          
          if (solve(board, i, j+1)) {
            return true
          }
          board[i][j] = '.'
        }
      }
      return false
    }
  }
  return true
}

var isValid = function(board, x, y, c) {
  let rowStart = Math.floor(x/3) * 3
  let colStart = Math.floor(y/3) * 3
  
  for (let i = 0; i < 9; i++) {
    if (board[i][y] === c || board[x][i] === c) return false
  }
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[rowStart+i][colStart+j] === c) return false
    }
  }
  
  return true
}
