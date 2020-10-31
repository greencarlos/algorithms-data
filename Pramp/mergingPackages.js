function getIndicesOfItemWeights(arr, limit) {
  const hashMap = new Map()
  
  for (let i = 0; i < arr.length; i++) {
    if (hashMap.has(limit - arr[i])) {
      return [i, hashMap.get(limit - arr[i])]
    }
    
    hashMap.set(arr[i], i)
  }
  
  return []
}

const arr1 = [4, 6, 10, 15, 16]
const lim1 = 21

console.log(getIndicesOfItemWeights(arr1, lim1))
console.log([3, 1])

/*
Time O(n)
Space O(n)

hashMap

Iterate over the array
if our hashMap has our limit - our current element
return our current index and the index of our element

otherwise we would hash our current and it's index

Brute Force
Time O(n^2) two for loops over arr
Space O(1) two elements or empty array


two for loops
  j to arr.length  - 1
    i to arr.length
    
   if arr[i] + arr[j] equals limit
   
   return [i, j]

return []

*/
