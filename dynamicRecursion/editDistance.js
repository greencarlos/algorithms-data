// https://leetcode.com/problems/edit-distance/solution/

var minDistance = function(A, B) {
  let go = (A, B, i, j, memo={}) => {
    let key = `${i},${j}`
    console.log('memo', memo)
    if (memo[key])
      return memo[key]
    if(!i || !j)
      return memo[key] = i + j
    return memo[key] = Math.min(
    go(A, B, i - 1, j - 1, memo) + Number(A[i - 1] != B[j - 1]),
    go(A, B, i - 1, j, memo) + 1,
    go(A, B, i, j - 1, memo) + 1,
    )
  }
  return go(A, B, A.length, B.length)
};

