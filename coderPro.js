const arr1 = ["cat", "cats", "dog", "catsdog"]
const output1 = ["catsdog"]

// two passes
// O(n + n) = O(n)

// keep track of the longest string on first pass
// check if the rest of the elements in the string
// exist inside the longest one

const solution = (arr) => {
  let largest = ""

  arr.forEach((e) => {
    if (e.length > largest.length) {
      largest = e
    }
  })

  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].includes(largest)) {
      return [false]
    }
  }

  return [largest]
}

console.log(solution(arr1), 'result')
console.log(output1, 'output1')
