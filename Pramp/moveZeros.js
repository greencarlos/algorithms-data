function moveZerosToEnd(arr) {
  let slow = 0
  let fast = 0
  
  while(fast < arr.length) {
//    console.log(slow, 's', fast, 'f')
    
    if (arr[slow] === arr[fast]) {
      fast++
    } else if (arr[fast] === 0) {
      fast++
    } else if (arr[slow] !== 0) {
      slow++
    } else if (arr[slow] === 0 && arr[fast] !== 0) {
      [arr[slow], arr[fast]] = [arr[fast], arr[slow]]
      slow++
      fast++
    }
  }
  
  return arr
}

                             
                             
const arr1 = [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
const out1 = [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

console.log(moveZerosToEnd(arr1))
console.log(out1)


/*
Brute Force
Time O(n^2)
Space O(1)

Iterate over the array
  i = 0 to arr.length O(n)
  if current element is 0, splice O(n) the 0 out and 
  then push 0 to the end of the array
  

Optimized 
Two Pointers

Time O(n)
Space O(1)

s - slow
f - fast = 1 + slow

while (fast < arr.length)

if our slow and fast pointer are the same, then increment fast
if our slow isn't a 0, increment slow
if fast is zero, keep increment

if our slow is zero and fast isn't the swap the values,
move both poitners forward



 s
                          v
[1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
                                              ^
 f

output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]

 s
                          v
[1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
                                         ^
    f

output: [1, 10, 2, 8, 3, 6, 4, 5, 7, 0, 0, 0, 0, 0]
*/
