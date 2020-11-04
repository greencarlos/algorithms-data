function getShortestUniqueSubstring(arr, str) {
  if (str.length < 2) {
    if (!arr.includes(str)) {
      return ""
    } else {
      return str
    }
  }
  
  const hashMap = {}
  arr.forEach((ele) => hashMap[ele] = (hashMap[ele] || 0) + 1)
  let result = ""
  let minLen = Infinity

  for (let i = 0; i < str.length; i++) {
    for (let j = i + arr.length; j <= str.length; j++) {
      const clone = str.slice(i, j)
//      console.log(clone, 'clone')
      
      if (isValid(clone, hashMap) && clone.length < minLen) {
        result = clone
        minLen = clone.length
      }
    }
  }
  
  function isValid(substring, hashTable) {
    const map = Object.create(hashTable, {})
    // {x:0,y:-1,z:0} -> key x,y,z -> values 0,-1,1
    // str -> xyyz
    for (let char of substring) {
      map[char]--
    }
    
    for (let key in map) {
      if (map[key] > 0) {
        return false
      }
    }
    
    return true
  }
  
  return result
}

const arr1 = ['x','y','z']
const str1 = "xyyzyzyx"
// xyyzyzy -> xyyz

console.log(getShortestUniqueSubstring(arr1, str1), "zyx")
console.log(getShortestUniqueSubstring(["a"], "a"), "a")
console.log(getShortestUniqueSubstring(["b"], "a"), "")



/**

if str.length < 2
  if it doesn't includes all the characters in arr return ""
  otherwise return str

['x','y','z'] -> arr.length smallest possible substring

result = "zyx"
minLen = 3

 0 1 2 3 4 5 6 7
"x y y z y z y x"
           i   
               j -> zyx

["a"].includes("a") -> "a"
"a"
 i
 
["b"].includes("b") -> ""
a


Brute Force
Time O(str.length ^ 2 + arr.length)
Space O(arr.length) for hashMap

  hashMap = {x:1, y:1, z:1}
  result = ""
  minLen = Infinity

  for i = 0 str.length - arr.length
    j = i + arr.length to str.length
    const substring = str.slice(i, j) // create a copy string
    
    grab a clone of i to j of our string
    isValid(substring, hashMap) and substring.length is less than minLen
    reassign our result to our substring and minLen to substring.length
    
 return result
 
    
isValid (subStr, hashMap)

  const map = Object.create({}, hashMap)

  iterate over our substring
  if our element exists inside our hashMap
  decrement the value in our hashMap
  
  one last iteration over the values of our hashMap
  if the values are greater than 0
  return false
  
return true
**/
