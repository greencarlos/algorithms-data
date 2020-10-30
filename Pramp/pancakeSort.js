function pancakeSort(arr) {
  // return arr.sort((a,b) => a - b)
  for (let i = arr.length - 1; i >= 0; i--) {
    const maxEle = Math.max(...arr.slice(0, i + 1))
    const max = arr.indexOf(maxEle)

    flip(arr, max) 
    flip(arr, i)
  }
  return arr 
} 

function flip(arr, k) {
  let start = 0
  
  while(start <= k) {
    [arr[start], arr[k]] = [arr[k], arr[start]]
    k--
    start++
  }
}

const arr1 = [1, 5, 4, 3, 2]
const out1 = [1, 2, 3, 4, 5]

console.log(pancakeSort(arr1))
console.log(out1)

/*
Time O(n), Space O(1)

 0, 1, 2, 3, 4 index
[1, 5, 4, 3, 2] elements
[5, 1, 4, 3, 2] swap(1, 5) the swap the whole array

[2, 3, 4, 1, 5] then find the next max up until index 3, swap 4 and 2
[4, 3, 2, 1, 5] then swap (4, 1)

[1, 2, 3, 4, 5] it should still work i believe. 
*/
