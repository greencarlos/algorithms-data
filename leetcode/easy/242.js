// https://leetcode.com/problems/valid-anagram/
"use strict"

/**
Given two strings s and t , write a function 
to determine if t is an anagram of s.

Example 1:
Input: s = "anagram", t = "nagaram"
Output: true

Example 2:
Input: s = "rat", t = "car"
Output: false
**/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
**/

var isAnagram = function(s, t) {
    var string1 = s.split("").sort().join("")
    var string2 = t.split("").sort().join("")

    return string1 == string2
};

const str1 = "anagram"
const tring1 = "nagaram"

const str2 = "rat"
const tring2 = "car"

console.log(isAnagram(str1, tring1), true);
console.log(isAnagram(str2, tring2), false);
