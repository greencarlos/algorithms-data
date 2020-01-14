// Dictionary: Abstract Data Type (ADT)
// That can store items, delete items and search for items
// each items has a key and value pairs

// ALGORITHM        AVERAGE    WORST CASE
// - space          O(n)       O(n)
// - search(key)    O(1)       O(n)
// - insert(item)   O(1)       O(n)
// - delete(item)   O(1)       O(n)

// return item with given key or report doesn't exist
// assuming items have a unique key
// overwrite any existing key

const hash = {}
// type of hash map is an object
const hashMap = new Map()
// proper hashmap in javascript

const arr = [1, 1, 1, 2, 2, 3]

for (let i = 0; i < arr.length; i++) {
  // Object
  hash[arr[i]] = (hash[arr[i]] || 0) + 1

  // Map
  if (hashMap.has(arr[i])) {
    hashMap.set(arr[i], (hashMap.get(arr[i]))+1)
  } else {
    hashMap.set(arr[i], 1)
  }
}

// Array.prototype.reduce
const reduceHash = (arr, obj={}) => {
  arr.reduce((acc, curr) => {
    if (obj[curr] === undefined) {
      obj[curr] = 1
    } else {
      obj[curr] += 1
    }
  }, obj)

  return obj
}

// Recursion object
const recurse = (arr, i=0, obj={}) => {
  if (i === arr.length) return obj
  obj[arr[i]] = (obj[arr[i]] || 0) + 1
  return recurse(arr, i+1, obj)
}

// Recusrion Map
const hashTable = (arr, i=0, hash=new Map()) => {
  if (i === arr.length) return hash
  if (hash.has(arr[i])) {
    hash.set(arr[i], hash.get(arr[i]) + 1)
  } else {
    hash.set(arr[i], 1)
  }
  return hashTable(arr, i+1, hash)
}

console.log(arr, 'original')
console.log(hash, 'hash')
console.log(" ")
console.log(hashMap, 'hashMap')
console.log(reduceHash(arr), 'reduce Hash')
console.log(" ")
console.log(recurse(arr), 'recursion hash')
console.log(hashTable(arr), 'map recurse')
