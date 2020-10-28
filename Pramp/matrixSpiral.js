function spiralCopy(matrix) {
  if (matrix.length <= 1) return matrix[0]
  const result = []

  let right = matrix[0].length - 1
  let down = matrix.length - 1
  let left = 0
  let up = 0

  while(left <= right && up <= down) {
    // left to right
    for (let i = left; i <= right; i++) {
      result.push(matrix[up][i])
    }
    up += 1

    // up to down
    for (let i = up; i <= down; i++) {
      result.push(matrix[i][right])
    }
    right -= 1

    // right to left
    for (let i = right; i >= left; i--) {
      result.push(matrix[down][i])
    }
    down -= 1

    //down to up
    for (let i = down; i >= up; i--) {
      result.push(matrix[i][left])
    }
    left += 1
  }

  return result
}




const matrix1 = [ 
[1,    2,   3,  4,    5],
[6,    7,   8,  9,   10],
[11,  12,  13,  14,  15],
[16,  17,  18,  19,  20] 
]

const out1 = [1, 2, 3, 4, 5, 10, 15, 20, 19, 18, 17, 16, 11, 6, 7, 8, 9, 14, 13, 12]

console.log(spiralCopy(matrix1))
console.log(out1)

console.log(" ")
const input2 = [[1,2]]
console.log(spiralCopy(input2))
console.log([1,2])
