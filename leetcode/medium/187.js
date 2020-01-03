// https://leetcode.com/problems/repeated-dna-sequences/

/* All DNA is composed of a series of nucleotides 
abbreviated as A, C, G, and T, 
for example: "ACGAATTCCG". 

When studying DNA, it is sometimes useful to identify repeated 
sequences within the DNA.

Write a function to find all the 10-letter-long sequences 
(substrings) that occur more than once in a DNA molecule.

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC", "CCCCCAAAAA"]
*/

/**
 * @param {string} s
 * @return {string[]}
 */

// isolate repeating sequences with the string
// find all permutations
// return it in an array 

/*
var findRepeatedDnaSequences = function(s) {
  let newArr = []
  let string = s//.split('')

  for (let i = 0; i < string.length; i++) {
    for (let j = i + 1; j < string.length; j++) {
      if (string[i] !== string[j]) {
        console.log(string[i], 'string[i]')
        console.log(string[j], 'string[j]')
        console.log(string.slice(i, j))
      }
    }
  }
  return
};
*/

var findRepeatedDnaSequences = function(s) {
  let store = new Set(), result = new Set()
  for (let i = 0; i < s.length - 9; i++) {
    const str = s.substring(i, i + 10)
    if (store.has(str)) {
      result.add(str)
    } else {
      store.add(str)
    }
  }
  return Array.from(result)
}

const str = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
const output = ["AAAAACCCCC", "CCCCCAAAAA"]

console.log(findRepeatedDnaSequences(str), output)
