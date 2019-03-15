/* 3)  A magic index in an array[0...n-1] 
is defined to be an index such that A[i] = i.
Given a sorted array of distinct integers,
write a method to find a magic index.
Assume there is always one that exists in array A.
*/

// Sorted keyword = binary search

let arr = [-40, -20, -1, 1, 2 ,3 ,5, 7, 9, 12, 13];
let startIndex = 0;
let endIndex = arr.length - 1;
findMagicIndex(arr, startIndex, endIndex); // 7


function findMagicIndex(array, startIndex, endIndex) {
     ...
}

let arr = [-40, -20, -1, 1, 2 ,3 ,5, 7, 9, 12, 13];
let startIndex = 0;
let endIndex = arr.length - 1;
console.log(findMagicIndex(arr, startIndex, endIndex)); // 7

