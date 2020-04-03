// Copy the array with sorted elements
// hash the elements

// if the 

// O (n log n + n) Time
// O(n) Space
var groupAnagrams = function(strs) {
  const hash = {}
  for (let i = 0; i < strs.length; i++) {
    const sorted = strs[i].split('').sort().join('')
    if (hash[sorted]) {
      hash[sorted].push(strs[i])
    } else {
      hash[sorted] = [strs[i]]
    }
  }
  return Object.values(hash)
};

const input = ["eat", "tea", "tan", "ate", "nat", "bat"]

const output = [
  ["ate","eat","tea"],
  ["nat","tan"],
  ["bat"]
]

console.log(groupAnagrams(input))
console.log(' ')
console.log(output)
