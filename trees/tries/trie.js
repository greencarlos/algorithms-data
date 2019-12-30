// https://medium.com/@alexanderv/tries-javascript-simple-implementation-e2a4e54e4330

/*
A trie is a tree. It's an n-ary tree designed for effecient retrieval. A trie allows us to search for a string in O(m). where m is the number of characters in that string. */

var node = {
  key: null,
  value: null,
  children: []
}

function Trie() {
  this.head = {
    key: '',
    children: {}
  }
}

Trie.prototype.add = function(key) {
  var curNode = this.head;
  var newNode = null;
  var curChar = key.slice(0, 1)

  key = key.slice(1);

  while(typeof curNode.children[curChar] !== "undefined"
    && curChar.length > 0) {
    curNode = curNode.children[curChar];
    curChar = key.slice(0, 1)
    key = key.slice(1)
  }

  while(curChar.length > 0) {
    newNode = {
      key: curChar,
      value: key.length === 0 ? null : undefined,
      children: {}
    };

    curNode.children[curChar] = newNode;

    curNode = newNode;

    curChar = key.slice(0, 1)
    key = key.slice(1)
  }
}

Trie.prototype.search = function(key) {
  var curNode = this.head;
  var curChar = key.slice(0, 1)
  var d = 0

  key = key.slice(1)

  while(typeof curNode.children[curChar] !== "undefined" && curChar.length > 0) {
    curNode = curNode.children[curChar];
    curChar = key.slice(0, 1)
    key = key.slice(1)
    d += 1
  }

  if (curNode.value === null && key.length === 0) {
    return d;
  } else {
    return -1
  }
}

Trie.prototype.remove = function(key) {
  var d = this.search(key);
  if (d > -1) {
    removeH(this.head, key, d);
  }
}

function removeH(node, key, depth) {
  if (depth === 0 && Object.keys(node.children).length === 0) {
    return true;
  }

  var curChar = key.slice(0, 1);

  if (removeH(node.children[curChar], key.slice(1), depth-1)) {
    delete node.children[curChar];
    if (Object.keys(node.children).length === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return false;
  }
}

var words = new Trie('.')
words.add('h')
words.add('e')
words.add('l')
words.add('l')
words.add('o')
var nice = words.search('h')
var sweet = words.search('p')
console.log(words)
console.log(nice)
console.log(sweet)
