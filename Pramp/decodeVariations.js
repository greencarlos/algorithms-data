function decodeVariations(S) {
  const N = S.length
  const dp = Array(N).fill(1)
  dp[N] = 1
  
  for (let i = N - 1; i >= 0; i--) {
    if (S[i] === '0') {
      dp[i] = 0
    } else if (S[i] === '1') {
      dp[i] = dp[i + 1] + dp[i + 2]
    } else if (S[i] === '2') {
      dp[i] = dp[i + 1]
      if (i + 1 < S.length && S[i + 1] <= '6') {
        dp[i] += dp[i + 2]
      }
    } else {
      dp[i] = dp[i + 1]
    }
  }
  
  return dp[0]
}

console.log(decodeVariations('1213'), 3)
console.log(decodeVariations('26'), 2)
console.log(decodeVariations('1270'), 0)


/*
Recursion and Dynamic Programming (4 steps)
1. Start with the recursive backtracking solution (Brute Force)
2. Optimize by using a memoization table (top-down dynamic programming)
3. Remove the need for recursion (bottom-up dynamic programming)
4. Apply final tricks to reduce the time / memory complexity

A -> 1
B -> 2
C -> 3
...
Z -> 26

1 2 6 2 -> A B F B, single digit variation
1 26 2 -> A Z B, look forward, i + 1
12 6 2 -> L F B
*/
