// https://leetcode.com/problems/string-compression/

/*
Given an array of characters, compress it in-place.
The length after compression must always be smaller than or equal to the original array.
Every element of the array should be a character (not int) of length 1.

After you are done modifying the input array in-place, return the new length of the array.
Follow up:
Could you solve it using only O(1) extra space?
 
Example 1:
Input: ["a","a","b","b","c","c","c"]
Output:
Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
Explanation:
"aa" is replaced by "a2". "bb" is replaced by "b2". "ccc" is replaced by "c3".

Example 2:
Input:["a"]
Output:
Return 1, and the first 1 characters of the input array should be: ["a"]
Explanation:
Nothing is replaced.
 

Example 3:
Input:["a","b","b","b","b","b","b","b","b","b","b","b","b"]
Output:
Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

Explanation:
Since the character "a" does not repeat,
it is not compressed. "bbbbbbbbbbbb" is replaced by "b12".
Notice each digit has it's own entry in the array.
*/

/**
 * @param {character[]} chars
 * @return {number}
**/

// My initial attempt
var compress1 = function(chars, i = 0, obj = {}) {
  // if input.length < 1 return input
  if (chars.length < 2) return chars
  // index through the array
  if (i === chars.length) return Object.entries(obj).flat(2).map(x => `${x}`)
  // hash values into object
  obj[chars[i]] = (obj[chars[i]] || 0) + 1
  // flatten object
  return compress1(chars, i + 1, obj)
};

/*
// Works in node
var solution = function(chars) {
  let i = chars.length - 1;

  while(i >= 0) {
    let curr = chars[i]
    let c = 1;

    while(curr === chars[--i]) c++;

  if (c > 1) chars.splice(i + 2, c - 1, ...String(c));
  }
  return chars
}

// Works on leetcode
var compress2 = function(chars) {
    let i = 0, j = 0;
    while (i < chars.length) {
        if (chars[j] === chars[i]) {
            j++;
        } else if (j > i + 1) {
            const nums = (j - i).toString().split('');
            chars.splice(i + 1, j - i - 1, ...nums);
            j = i = i + 1 + nums.length;
        } else if (j = i + 1) {
            i = j;
            j++;
        }
    }
    return chars.length;
};
*/

const input1 = ["a","a","b","b","c","c","c"]
const output1 = ["a","2","b","2","c","3"]
 
const input2 = ["a"]
const output2 = ["a"]

const input3 = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
const output3 = ["a","b","1","2"]

console.log(compress1(input1))
console.log(output1, " output")
console.log(" ")
console.log(compress1(input2))
console.log(output2, " output")
console.log(" ")
console.log(compress1(input3))
console.log(output3, " output")
console.log(" ")

