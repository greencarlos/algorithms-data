Strings and arrays

******************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
******************************************************************************************

1) Given a positive number, convert it to base2 and return it in string.

Example: 4 is converted to ‘100’, 14 is converted to ‘1110’

2)  Write a program which takes as input an array and finds the distance between a closest pair of equal entries. For example, if s = [‘all’, ‘work’, ‘and’, ‘no’, ‘play’, ‘makes’, ‘for’, ‘no’, ‘work’, ‘no’, ‘fun’, ‘and’ ‘no’, ‘results’], then the second and third occurences of ‘no’ is the closest. The distance is 1 and it is returned. Return -1 if no closest pair of equal entries is found.

function findNearestRepetition (strings) {
   ...
}

console.log(findNearestRepetition(['a','no','zebra','no','no'])); // 0
console.log(findNearestRepetition(['abc','no','zebra'])); // -1
console.log(findNearestRepetition(['abc','no','zebra','abc'])); // 3

Hint: use a hash table

3) spiralTraversal

When traversing 2D array, we usually visit each element row by row, or column by column. In this problem, we will traverse the 2D array in spiral order. 

For example, given the following array:

[ 
[10, 12, 14],
[16, 18, 20],
[22, 24, 26]
]

the spiral ordering is [10, 12, 14, 20, 26, 24, 22, 16, 18].

Write a program which takes an N x N 2D array and returns the spiral ordering of the array.










****************
Feedback:
Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting the group :) 

Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all

* 1)
**************
********
* Jack
********
function convertBinary (number) {
var result = [];

for (; number > 0; number = Math.floor(number / 2)) {
result.push(number%2);
}

return result.reverse().join('');
}



**************
* 2)  
**************
const findShortestDistance = (array) => {
let map = {}
let len = array.length;
let smallest = Number.MAX_VALUE;

for(let i = 0; i < len; i++){
let el = array[i];
if(map[el] !== undefined){
let distance = i - map[el] -1;
if(distance < smallest){
smallest = distance
}
}

map[el] = i
}
return smallest===Number.MAX_VALUE?-1:smallest;
};


******
Jack
******
function findNearestRepetition (strings) {
  let indexHash = {};
  let minDistance = strings.length;

  strings.forEach(function(item, i) {
    if (indexHash.hasOwnProperty(item)) {
      if ( (i - indexHash[item]) < minDistance) {
        minDistance = i - indexHash[item];
      }
    }

    indexHash[item] = i;
  });

  return minDistance === strings.length ? -1 : minDistance;
}


**************
3)
https://codeinterview.io/MPWOCJJJAQ


**************






