// https://leetcode.com/problems/implement-trie-prefix-tree/
//
function Trie() {
  const root = {}
  return {insert, search, startsWith}

  function insert(word) {
    let curr = root;
    word.split('').forEach(ch => curr = curr[ch] || {})
    curr.isWord = true
  }

  function traverse(word) {
    let curr = root
    for (var i = 0; i < word.length; i++) {
      if (!curr) return null
      curr = curr[word[i]]
    }
    return curr
  }

  function search(word) {
    let node = traverse(word)'
    return !!node && !!node.isWord;
  }

  function startsWith(word) {
    return !!traverse(word)
  }
}
