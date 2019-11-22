const output1 = [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]

const generate = function(n) {
  let result = [[1], [1, 1]]
  let curr = []

  if (n < 0) return []
  if (n === 0) return []
  if (n === 1) return [[1]]

  for (let i = 2; i < n; i++) {
    curr = [1]

    for (let j = 1, m = i; j < m; j++) {
      curr[j] = result[i - 1][j] + result[i - 1][j - 1]
    }
    curr.push(1)
    result.push(curr)
  }
  return result[1]
}

const getRow = function(rowIndex) {
  let n = rowIndex + 1 
  let result = [[1], [1, 1]]
  let curr = []

  if (n <= 0) return []
  if (n === 1) return [[1]]

  for (let i = 2; i < n; i++) {
    curr = [1]

    for (let j = 1, m = i; j < m; j++) {
      curr[j] = result[i - 1][j] + result[i - 1][j - 1]
    }
    curr.push(1)
    result.push(curr)
  }
  return result[rowIndex]
};

//console.log(generate(-1))
//console.log(generate(0))
//console.log(generate(1))
//console.log(generate(3))
//console.log(generate(5))
//console.log(generate(10))
//console.log(" ")
//console.log(getRow(-1))
//console.log(getRow(0))
//console.log(getRow(1))
console.log(getRow(3))
//console.log(getRow(5))
//console.log(getRow(10))
