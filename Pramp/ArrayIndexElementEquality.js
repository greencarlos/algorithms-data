function indexEqualsValueSearch(arr) {
  // if (arr[0] === 0) return 0
  let left = 0
  let right = arr.length - 1
  let lowest = Infinity
  
  while(left <= right) {
    const mid = Math.floor((left + right) / 2) 
    
    if (arr[mid] === mid){
      lowest = Math.min(mid, lowest)
      right = mid - 1
    } else if (mid > arr[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  
  return lowest === Infinity ? -1 : lowest
}

//             0,1,2,3,4
const arr1 = [-8,0,2,5,4,5,6,7]
console.log(indexEqualsValueSearch(arr1), 2)

const arr2 = [-1,0,3,6]
console.log(indexEqualsValueSearch(arr2), -1)

const arr3 = [0,1,2,3,4,8,10,11,12,5,6,7]
console.log(indexEqualsValueSearch(arr3), 0)

/*
  
  left  | right
 0,  1, | 2, 3 index
[-8, 0, | 2, 5]

output: 2 # since arr[2] == 2

  0, 1, 2, 3 index
[-1, 0, 3, 6]

output: -1 # since no index i


Brute Force
Time O(n) n = elements in array
Space O(1) = single returned element

Traverse the array, and check if our
current element equals our index, then return
our index

otherwise return -1



Binary Search on our sorted array
Time O(lg n)
Space O(1)

create a left index = 0
create a right index = arr.length - 1

grab the mid index

check if our current element matches mid
then we can return mid

otherwise if our mid is greater than left our 
current element, left = mid + 1

else right = mid - 1

*/
