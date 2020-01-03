"use strict"
// https://leetcode.com/problems/reverse-vowels-of-a-string/

/*
Write a function that takes a string as
input and reverse only the vowels of a string.

Example 1:
Input: "hello"
Output: "holle"

Example 2:
Input: "leetcode"
Output: "leotcede"

Note: The vowels does not include the letter "y".

*/ 

/**
 * @param {string} s
 * @return {string}
**/

var reverseVowels = function(s) {
  if (s === null || s.length === 0) {
    return s;
  }
  var chars = s.split('');
  var low = 0;
  var high = s.length - 1;
  var vowels = "aeiouAEIOU";
  var tmp;
  while(low < high) {
    while(low < high && vowels.indexOf(chars[low]) === -1) {
      low++;
    }

    while(low < high && vowels.indexOf(chars[high]) === -1) {
      high--;
    }

    tmp = chars[high];
    chars[high] = chars[low]
    chars[low] = tmp
    low++;
    high--;
  }
  return chars.join('')
};

const input1 = "hello"
const output1 = "holle"

const input2 = "leetcode"
const output2 = "leotcede"

console.log(reverseVowels(input1), output1)
console.log(reverseVowels(input2), output2)
