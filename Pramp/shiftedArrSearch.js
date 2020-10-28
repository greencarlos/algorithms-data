function shiftedArrSearch(arr, num) {
  const pivot = findPivot(arr) 
  const left = binarySearch(arr, 0, pivot, num)
  const right = binarySearch(arr, pivot, arr.length - 1, num)

  if (left > - 1) {
    return left
  } else if (right > -1) {
    return right
  } else {
    return binarySearch(arr, 0, arr.length - 1, num)
  }
}

function binarySearch(arr, left, right, num) {

  while(left <= right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] === num) {
      return mid
    } else if (arr[mid] < num) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return - 1
}

function findPivot(arr) {
  let left = 0
  let right = arr.length - 1

  while(left < right) {
    let mid = Math.floor((left + right) / 2)

    if (arr[mid] < arr[mid - 1]) {
      return mid
    } else if (arr[mid] > arr[right]) {
      left = mid 
    } else {
      right = mid - 1
    }
  }

  return -1
}

const shift1 = [9, 12, 17, 2, 4, 5]
console.log(shiftedArrSearch(shift1, 2), 3)

// [2,3,4,5,1]

/*
I got it to work for shift1 test case
I haven't been able to run the tests for the other cases
because of the internet connection

Optimized approach is using binary search
Time O(log n)
Space O(1)

One search to find the pivot

Search left half and right half of pivot in array
*/
