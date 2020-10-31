function isToeplitz(matrix) {
  const row = matrix.length - 1
  const col = matrix[0].length - 1
  
  for (let i = 0; i < col; i++) { // iterate over first col
    if (!isValid(0, i, matrix[0][i])) {
      return false
    }
  }
  
  for (let i = 1; i < row; i++) { // iterate over first row
    if (!isValid(i, 0, matrix[i][0])) {
      return false
    }
  }
  
  function isValid(r, c, ele) {
    if (r > row || c > col) return true
    if (matrix[r][c] !== ele) {
      return false
    }
    
    return isValid(r+1,c+1,ele)
  }
  
  return true
}

const matrix1 = [
  [1,2,3,4],
 [5,1,2,3],
 [6,5,1,2]
]

const matrix2 = [
  [1,2,3,4],
 [5,1,9,3],
 [6,5,1,2]
]


console.log(isToeplitz(matrix1), true)
console.log(isToeplitz(matrix2), false)

/*
Time O(r * c) row * col, hit every element once
Space O(r) height of our row,Recursion on the call stack, line 23

My turn. I can hear you. I guess I can just type.
I'm going to take a couple of seconds to read the question.

Iterate over the first row, use a helper function to check it it's valid
iterate over the first col, use the same helper function

So it seems like we need to iterate over the matrix
at each element we need to check if it's a valid toplitz
which our current element is the same element when we go down and right
*/
