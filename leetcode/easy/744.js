// https://leetcode.com/problems/find-smallest-letter-greater-than-target/

/*
Given a list of sorted characters letters containing only lowercase letters, 
and given a target letter target, 
find the smallest element in the list that is larger than the given target.

Letters also wrap around.
For example, if the target is target = 'z' and letters = ['a', 'b'], the answer is 'a'.

Examples:
Input:
letters = ["c", "f", "j"]
target = "a"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "c"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "d"
Output: "f"

Input:
letters = ["c", "f", "j"]
target = "g"
Output: "j"

Input:
letters = ["c", "f", "j"]
target = "j"
Output: "c"

Input:
letters = ["c", "f", "j"]
target = "k"
Output: "c"

Note:
letters has a length in range [2, 10000].
letters consists of lowercase letters, and contains at least 2 unique letters.
target is a lowercase letter. 
*/ 

const alpha = "abcdefghijklmnopqrstuvwxyz"
console.log(alpha.split('').sort().join(''))

var nextGreatestLetter = function(letters, target) {
  for(let i = 0; i < letters.length; i++) {
    if (letters[i] > target) return letters[i]
  }
  return letters[0]
};

const letters1 = ["c", "f", "j"]
const target1 = "a"
console.log(nextGreatestLetter(letters1, target1), "c")

const letters2 = ["c", "f", "j"]
const target2 = "c"
console.log(nextGreatestLetter(letters2, target2), "f")

const letters3 = ["c", "f", "j"]
const target3 = "d"
console.log(nextGreatestLetter(letters3, target3), "f")

const letters4 = ["c", "f", "j"]
const target4 = "g"
console.log(nextGreatestLetter(letters4, target4), "j")

const letters5 = ["c", "f", "j"]
const target5 = "j"
console.log(nextGreatestLetter(letters5, target5), "c")

const letters6 = ["c", "f", "j"]
const target6 = "k"
console.log(nextGreatestLetter(letters6, target6), "c")
