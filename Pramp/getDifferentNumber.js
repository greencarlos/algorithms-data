function getDifferentNumber(arr) {
  let temp = 0
  let n = arr.length 
  
  for (let i = 0; i < n; i++) {
    temp = arr[i]
    console.log(n, 'n', i, 'i', temp, 'temp')
    while(temp < n && arr[temp] !== temp) {
      [temp, arr[temp]] = [arr[temp], temp]
      temp = n + 1
    }
  }
  
  for (let i = 0; i < n; i++) {
    if (arr[i] !== i) {
      return i
    }
  }
  
  return n
}

const nums1 = [3,0,1]
console.log(getDifferentNumber(nums1), 2)

const nums2 = [0,1]
console.log(getDifferentNumber(nums2), 2)

const nums3 = [100, 3, 1, 23, 24]
console.log(getDifferentNumber(nums3), 2)

const nums4 = [3, 1, 23, 24, 100]
console.log(getDifferentNumber(nums4), 2)

const nums5 = [1,3,0,2]
console.log(getDifferentNumber(nums5), 4)
