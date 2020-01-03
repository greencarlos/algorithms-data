// https://leetcode.com/problems/implement-strstr/

/* Implement strStr().
Return the index of the first occurrence of 
needle in haystack, or -1 if needle is not part of haystack.

Example 1:
Input: haystack = "hello", needle = "ll"
Output: 2

Example 2:
Input: haystack = "aaaaa", needle = "bba"
Output: -1 
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
**/

var strStr = function(haystack, needle) {
  if (haystack === undefined || needle === undefined) return -1
  return haystack.indexOf(needle)
};

const haystack1 = "hello"
const needle1 = "ll"

const haystack2 = "aaaaa"
const needle2 = "bba"

console.log(strStr(haystack1, needle1), 2)
console.log(strStr(haystack2, needle2), -1)
