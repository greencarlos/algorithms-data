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

const arr = [1, 2, 3, 4, 5, 5, 5, 5]

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

console.log(arr, 'original')
console.log(hash, 'hash')
console.log(hashMap, 'hashMap')
