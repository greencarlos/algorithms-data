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


console.log(hash, 'hash')
console.log(hashMap, 'hashMap')
