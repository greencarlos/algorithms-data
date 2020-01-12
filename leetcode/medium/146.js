// https://leetcode.com/problems/lru-cache/

/*
Design and implement a data structure for Least 
Recently Used (LRU) cache. It should support the following operations: get and put.
get(key) - Get the value (will always be positive) 

of the key if the key exists in the cache, otherwise return -1.
put(key, value) - Set or insert the value if the key is not already present. 

When the cache reached its capacity, 
it should invalidate the least recently used item before inserting a new item.
The cache is initialized with a positive capacity.

Follow up:
Could you do both operations in O(1) time complexity?

Example:

LRUCache cache = new LRUCache( 2 /* capacity */ 

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  let map = {}
  let head = new Node()
  let tail = new Node()
  this.cap = capacity
  this.size = 0
  var connect = function(a,b,c = null) {
    a.next = b
    b.prev = a
    if (c) {
      c.prev = b
      b.next = c
    }
  }
  connect(head, tail)
  this.moveToHead = function(node) {
    if (node.next) {
      connect(node.prev, node.next)
    }
    connect(head, node, head.next)
  }

  this.removeTail = function() {
    let node = tail.prev
    connect(node.prev, tail)
    delete map[node.key]
  }
  this.map = map
}

var Node = function(key = 0, val = 0) {
  this.key = key
  this.val = val
  this.next = null
  this.prev = null
}


/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  let map = this.map
  if (key in map) {
    let res = map[key].val
    this.moveToHead(map[key])
    return res
  } else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  let map = this.map;
  if (key in map) {
    this.moveToHead(map[key])
    map[key].val = value
  } else {
    let node = new Node(key, value)
    this.moveToHead(node)
    map[key] = node
    if (this.size === this.cap) {
      this.removeTail()
    } else {
      this.size++
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
**/

const cache = new LRUCache(10)
console.log(cache, 'cache')

const a = cache.put(1, 1);
const b = cache.put(2, 2);
const c = cache.get(1);       // returns 1
const d = cache.put(3, 3);    // evicts key 2
const e = cache.get(2);       // returns -1 (not found)
const f = cache.put(4, 4);    // evicts key 1
const g = cache.get(1);       // returns -1 (not found)
const h = cache.get(3);       // returns 3
const i = cache.get(4);       // returns 4

console.log(a, 'a')
console.log(b, 'b')
console.log(c, 'c')
console.log(d, 'd')
console.log(e, 'e')
console.log(f, 'f')
console.log(g, 'g')
console.log(h, 'h')
console.log(i, 'i')
