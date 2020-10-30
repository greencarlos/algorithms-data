function findArrayQuadruplet(arr, s) {
  arr.sort((a,b) => a - b)
  
  for (let i = 0; i < arr.length - 3; i++) {
    for (let j = i + 1; j < arr.length - 2; j++) {
      let left = j + 1
      let right = arr.length - 1
      
      while(left < right) {
        const sum = arr[i] + arr[j] + arr[left] + arr[right]
        
        if (sum === s) {
          return [ arr[i], arr[j], arr[left], arr[right]]
        } else if (sum < s) {
          left++
        } else {
          right--
        }
      }
    }
  }
  
  return []
}


/*

You’re asked to return the first one you encounter (considering the results are sorted).

Brute Force
Time O(n^4) for 4 loops
Space O(1)

  Sort the input array and have 4 for loops
  for i = 0 to arr.length - 3
    j = i + 1 to arr.length - 2
      k = j + 1 to arr.length - 1
        l = k + 1 to arr.length 
        
   sum = arr[i] + arr[j] + arr[k] + arr[l]
   
   if sum matches s then return
   [arr[i], arr[j], arr[k], arr[l]]



Optimize
Time O(n^3)
Space O(1)


Sort the input array
two for loops
  for i = 0 to arr.length - 1
    for j = i + 1 to arr.length
    left = j + 1
    right = arr.length - 1
    
    while(left < right)
    sum = arr[i] + arr[j] + arr[left] + arr[right]
    
    if sum matches s
     return [arr[i] + arr[j] + arr[left] + arr[right]]
     
    otherwise, if sum < s
     move left pointer over (increment)
     
    if sum > s
      move right pointer over (decrement)
*/
