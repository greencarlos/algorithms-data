/*
Time O(n) n = nodes in the tree
Space O(w) w = total words added the queue

https://leetcode.com/problems/word-ladder/

  if target is not inside words return -1
  seen new Set
  totalEdits = 0
  Queue = [source]
  
  while queue is not empty
   checkWord = dequeued from queue
   if seen has checkWord break out of iteration
   
   iterate over our workds array
   at each word we want to compare the diference
   check if diff === 1, if it is add it the queue
   
   increment our totalEdits
   otherwise keep iterating
   if our checkword equals target,
   
   then we can return our totalEdits
   otherwise return -1
*/

function shortestWordEditPath(source, target, words) {
  if (!words.includes(target)) return -1
  const visited = new Set()
  let totalEdits = 0 // 5
  const queue = [source] // []
  
//   console.log('queue', queue)
  
  while(queue.length !== 0) {
    var queueLen = queue.length
    
//    console.log('queue', queue)
    
    for (let i = 0; i < queueLen; i++) {
    
    const checkWord = queue.shift() // dog
//console.log(checkWord, 'check')
    if (checkWord === target) {
      return totalEdits
    }
    
    if (visited.has(checkWord)) {
      continue // {bit, but, big, put, pot}
    }
    
    visited.add(checkWord)
    
    for (word of words) {
      let diff = 0
      
      if (word.length !== checkWord.length) {
        continue // 'ab' 'abc'
      }
      
      for (let i = 0; i < checkWord.length; i++) {
        if (word[i] !== checkWord[i]) {
          diff += 1
        }
      }
      
      if (diff === 1) {
        queue.push(word)
        }
      } 
    }
    totalEdits += 1
  }
  return -1
}

const source1 = "bit" 
const  target1 = "dog"
const  words1 = ["but", "put", "big", "pot", "pog", "dog", "lot"]

console.log(shortestWordEditPath(source1, target1, words1), 5)
	/**
	@param source: string
	@param target: string
	@param words: string[]
	@return: integer
	*/
  
//  source = "bit" 
//  target = "dog"
//  words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

// [big,put]
/*
source = "bit", target = "dog"
words = ["but", "put", "big", "pot", "pog", "dog", "lot"]

output: 5
explanation: bit -> but -> put -> pot -> pog -> dog has 5 transitions.
source = "no", target = "go"
words = ["to"]

output: -1
 */
  
  
//.           bit
//           /   \
//         but   big  
//         / 
//       put
//       /
//      pot
//      /

	// your code goes here

