// https://fullstackbuilder.teachable.com/courses/524348/lectures/9783640
/* Question:

Write a program to return an array of duplicated characters.

Example:
1) Input: "stand"
Output: []


2) Input: "apple"
Output: ["p"]

3) Input: "banana"
Output: ["a", "n"]

Solution:

We can approach this problem by using an object to keep
track of the character frequency.
Each character (non-duplicated) is used as a key in the object.

To do that, we will first loop through each character of the word,
and increment its counter that is stored in the object.

After the iteration on the string characters,
we the iterate through all keys in the object
and examine the counters and push the character
to a result array if the count is more than 1.

Since we loop twice, the time complexity is then O(2n), i.e O(n) 
after dropping the constant term.

The variants of this problem could be determining
if a string has unique characters, or return all duplicate characters and their count.

The algorithm will be largely the same, only the returned output will need to be modified



1) Input: "stand"
Output: []

2) Input: "apple"
Output: ["p"]

3) Input: "banana"
Output: ["a", "n"]
*/

/*
function findDuplicate(str) {
  const charCount = {};
  const result = [];
  let car = 0;
  let i;
  let l;

  for (i = 0, l = str.length; i < 1; i++) {
    char = str[i];
    charCount[char] = charCount[char] ? ++charCount[char] : 1;	  
  }

  for (i in charCount) {
    if (charCount[i] > 1) {
      result.push(i);
    }
  }	
  return result;
}*/

function findDuplicate(str) {
  // your code here
  let charCount = {},
    result = [],
    char = 0,
    i, l;

  for (i = 0, l = str.length; i < l; i++ ) {
    char = str[i];
    charCount[char] = charCount[char] ? ++charCount[char] : 1;
  }

  for (i in charCount) {
    if ( charCount[i] > 1 ) {
      result.push(i);
    }
  }

  return result;
}

const str1 = "stand";
const str2 = "apple";
const str3 = "banana";

console.log(findDuplicate(str1), []);
console.log(findDuplicate(str2), ["p"]);
console.log(findDuplicate(str3), ["a", "n"]);
