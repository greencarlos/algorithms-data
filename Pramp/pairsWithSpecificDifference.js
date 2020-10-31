function findPairsWithGivenDifference(arr, k) {
  const result = [] // []
  const map = new Map() // {}
  
  for (let ele of arr) {
    map.set(ele - k, ele) // []
  }
  
  for (let ele of arr) {
    if (map.has(ele)) {
      result.push([map.get(ele), ele])
    }
  }
  
  return result
}

const arr1 = [0, -1, -2, 2, 1]
const k1 = 1

console.log(findPairsWithGivenDifference(arr1, 1))
console.log([[1, 0], [0, -1], [-1, -2], [2, 1]])

const arr2 = [1, 7, 5, 3, 32, 17, 12]
console.log(findPairsWithGivenDifference(arr1, 17), [])

/*

x - y = k
   +y.  +y
   
x = k + y



 0, 1,  2, 3, 4
[0,-1, -2, 2, 1],k = 1

{0 => 0, -1 => -1, } hash
[[0, -1], [1, 2]] result


output: [
[1, 0], 1 - 0 = 1
[0, -1], 0 - -1 = 1
[-1, -2], -1 - -2 = -1 + 2 = 1
[2, 1]] 2 - 1 = 1

input:  arr = [1, 7, 5, 3, 32, 17, 12], k = 17
output: []



Optimized
Time O(n)
Space O(n)

const hash = {}
const result = []

Iterate over the arr, if our hashTable has k - arr[i]
add it to our result array, then hash our element in the
array

then return our result array


Brute Force
Time O(n^2)
Space O(n)

result = []

for i = 0 to arr.length
  for j = i + 1 to arr.length
  
  if (arr[i] - arr[j] === k)
    add(arr[i], arr[j])
    
  return result
*/
