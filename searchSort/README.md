Searching/Sorting


*****************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting ** the group :) Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************

1. Sorted Merge: You are given two sorted arrays, A and B, where A has a large enough buffer at the end to hold B. Write a method to merge B into A in sorted order. 

Example:
Input: [2,3,4,7,9], [1,5,6,8]
Output: [1,2,3,4,5,6,7,8,9]

function interface:
function mergeTwoSortedArrays(arrA, arrB) {
  // your code here
  
}

2) Given an array of integers that are cyclically sorted, return the index of the smallest element in the array.

The array is considered cyclically sorted as it is possible to cyclically shift its entries so that it becomes sorted.

Assume that all elements are distinct.

Example:
1) Input: [5,6,7,1,2,3,4]
    Output: 3

2) Input: [20, 10, 11, 12, 13, 14, 15]
    Output: 1


**********
Solution: Jack 1)
*****************
function mergeTwoSortedArrays(arrA, arrB) {
  // your code here
  let l = arrA.length,
    i = l - 1,
    m = arrB.length,
    j = m - 1,
    writeIndex = l + m - 1;

  while (i >= 0 && j >= 0) {
    if (arrA[i] <= arrB[j]) {
      arrA[writeIndex] = arrB[j];
      j--;
    } else {
      arrA[writeIndex] = arrA[i];
      i--;
    }

    writeIndex--;
  }

  while (j >= 0) {
    arrA[writeIndex] = arrB[j];
    j--;
    writeIndex--;
  }

  return arrA;
}


***************
Solution: JACK - 2)
***************
function searchSmallest (numbers) {
 let left = 0;
 let right = numbers.length - 1;
 let middle = 0;

 while (left < right) {
   middle = Math.floor((left + right)/2);

   // case like [4, 5, 6, 1, 2]
   if (middle < right && numbers[middle + 1] < numbers[middle]) {
     return middle + 1;
   }

   // case like [6, 7, 1, 4, 5]
   if (middle > left && numbers[middle] < numbers[middle - 1]) {
     return middle;
   }

   if (numbers[right] < numbers[middle]) {
     // case like [4, 5, 6, 7, 1, 2]
     left = middle + 1;
   } else {
     // case like [1,2,4, 5, 6, 7, 8,9]
     right = middle - 1;
   }
 }

console.log(searchSmallest([7,8,9,10,11,1,2]));
console.log(searchSmallest([1,2,7,8,9,10,11]));

