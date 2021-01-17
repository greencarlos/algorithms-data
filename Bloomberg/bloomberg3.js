/*
start_word -> end_word

find the path from the start_word to end_word

lead       gold.      [gold, goat, boat, load, goad]
lead       butt      [gold, goat, boat, load, goad] return -1

lead -> load -> goad -> gold
bead           

our path has to be valid english words in a dictionary
At each step we can only change on letter at a time

input: start : string, end : string, words : dictionary
output: [lead, load, goad, gold]

Shortest Paths
Breath First Search / Traversal

start = root

if our endWord doesn't exist inside of our dictionary, return -1
Have a queue and a set for visited nodes to avoid cycles

queue = [start]
visited = {} dog -> cog (dog), dot (dog) -> cot (cog)
prevWords = {}
result = []

  while our queue has words
    grab currWord from our queue
    
    if currWord matches our endWord
     add to result
     break out of loop
     
    if currWord hasn't been visited
      add it to our visited set
      
    we can iterate over our words
    create diff = 0
    
    iterate over our currWord and word in words
    if the element's don't match increment diff
  
    check if diff equals 1, add it to our queue
    
  backtrack for the path of our words
    
return -1


dog -> cot

dog -> cog, dot

cog : dog
dot: cog
cot: cog

[dog, cog, cot]

*/

function solution(startW, endW, words) {
    if (!words.includes(endW)) return -1
    const queue = [startW]
    const visited = new Set()
    const prevWords = {}
    const result = []
   
    while(queue.length !== 0) {
      const currW = queue.shift()
      
      if (currW === endW) {
        resut.push(currW)
        break
      }
      
      if (visited.has(currW)) {
        continue
      }
      
      visited.add(currW)
      
      for (let word of words) {
        let diff = 0
        
        if (currW.length !== word.length) {
            continue
        }
        
        for (let i = 0; i < currW.length; i++) {
          if (currW[i] !== word[i]) {
              diff += 1
          }
        }
        
        if (diff == 1) {
          queue.push(word)
          prevWord[word] = currW
        }
      }
    }
    
    queue.push(endW)
    
    while(queue.length !== 0) {
      currW = queue.shift()
      
      if (currW === startW) {
          return result
      }
      
      result.unshift(prevWord[currW])
      queue.push(prevWord[currW])
    }
    
  return -1
}
