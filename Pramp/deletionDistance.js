function deletionDistance(str1, str2) {
  let str1Len = str1.length
  let str2Len = str2.length

  const memo = new Array(str1Len + 1)
    .fill([]).map(x => new Array(str2Len + 1).fill(0))
  
  for (let i = 0; i <= str1Len; i++) {
    for (let j = 0; j <= str2Len; j++) {
      if (i === 0) {
        memo[i][j] = j
      } else if (j === 0) {
        memo[i][j] = i
      } else if (str1[i-1] == str2[j - 1]) {
        memo[i][j] = memo[i - 1][j - 1]
      } else {
        memo[i][j] = 1 + Math.min(
          memo[i-1][j], 
          memo[i][j-1]
        )
      }
    }
  }

  return memo[str1Len][str2Len]
}



const str1 = "dog"
const str2 = "frog"
console.log(deletionDistance(str1, str2), 3)

const str3 = "some"
const str4 = "some"
console.log(deletionDistance(str3, str4), 0)

const str5 = "some"
const str6 = "thing"
console.log(deletionDistance(str5, str6), 9)

const str7 = ""
const str8 = ""
console.log(deletionDistance(str7, str8), 0)
