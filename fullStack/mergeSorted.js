/*Question 2) Given two sorted arrays of integers,
 * arrA and arrB, where arrA has enough empty entries
 * at its end to fit all of arrB entries, merge two arrays
 * together in a sorted order in arrA.

function mergeTwoSortedArrays(arrA, arrB)

Input: [2,3,4,7,9], [1,5,6,8]
Output: [1,2,3,4,5,6,7,8,9]
*/

const arr1 = [2,3,4,7,9]
const arr2 = [1,5,6,8]

function merge(arrA, arrB) {
   // implementation
  return arrA.concat(arrB).sort()
}

console.log(merge(arr1, arr2), [1,2,3,4,5,6,7,8,9])
//  Output: [1,2,3,4,5,6,7,8,9]
