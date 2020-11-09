// https://leetcode.com/problems/reverse-words-in-a-string-ii/submissions/

/*
function reverseWords(arr) {
  const result = []
  const str = arr.join('')
  const revArr = str.split(' ').reverse()
  
  for (let word of revArr) {
    const chars = word.split('')
    result.push(...chars)
    result.push(" ")
  }
  
  result.pop()
  return result
}
*/

function reverseWords(arr) {
  let end = 0
  let endArr = arr.length - 1
  
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].trim() == '') {
      reverse(end, i - 1)
      end = i + 1
    } 
  }
  
  reverse(end , endArr)
  reverse(0, endArr)  
  
  function reverse(end, curr) {
    while(end < curr) {
      [arr[end], arr[curr]] = [arr[curr], arr[end]]
      curr--
      end++
    }
  }
  
  return arr
}

const arr1 = [ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ', 'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

console.log(reverseWords(arr1))

/*
Brute Force
Time & Space O(n)

1. Join the array by ('') string
"perfect makes practice"

2. Split the array by (' ') then reverse it
["practice", "makes", "perfect"]

3. create a result array and iterate over our 
mutated array and then at each word, blow it up 'p', 'r', ... ""
then push the elements into my result array, add empty " "

pop off the last empty string
return result array

input:  arr =

[ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ', 'm', 'a', 'k', 'e', 's', '  ','p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]


endArr = arr.length - 1
end = 14

   0,   1,   2,   3,   4,   5,   6,   7  index
[ 'p', 'e', 'r', 'f', 'e', 'c', 't', '  ',

 8,   9,   10,  11,  12,  13
'm', 'a', 'k', 'e', 's', '  '

 14,  15, 16,  17,   18,  19,  20,  21  
'p', 'r', 'a', 'c', 't', 'i', 'c', 'e' ]

reverse(arr, end, i)
reverse(arr, end, 7)
reverse(arr, end, 13)

hit end of input array
reverse(arr, end, endArr)

reverse the entire array
reverse(arr, 0, endArr)

['t', 'c', 'e'.....]
['s', 'e', 'k', 'a', 'm']


Time O(n) & Space O(1)
No built in methods

helper function reverse(arr, last, curr)
 - reverse the string in place
 
Iterate over the array and then, whenever we hit
an empty space, call reverse on our current
index and last index, then update current and last

when we hit the end of our array, call reverse
on our last index and the end of our input array
then reverse the entire array
*/
