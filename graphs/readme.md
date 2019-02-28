Graphs

******************************************************************************************
** You can work on these questions in your local environment
** and copy and paste your solution to the bottom of this page.
**
** We will do code review and discussion. Feel free to raise any questions you
** have throughout the session.
**
*******************************************************************************************
** Feedback:
** Kindly leave your feedback in this link - feedback page. Your feedback will help in promoting ** the group :) Link: https://www.meetup.com/Bay-Area-JavaScript-Interview-Prep-Meetup/about/comments/?op=all
**********************************************************************************************

******************
* Questions
*******************
1. Given two words (beginWord and endWord), and a dictionary's word list, find the length of shortest transformation sequence from beginWord to endWord, such that:  Only one letter can be changed at a time. Each transformed word must exist in the word list. Note that beginWord is not a transformed word. Note:  Return 0 if there is no such transformation sequence. All words have the same length. All words contain only lowercase alphabetic characters. You may assume no duplicates in the word list. You may assume beginWord and endWord are non-empty and are not the same.   
Example 1:  Input: beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]  Output: 5  Explanation: As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog", return its length 5. Example 2:  Input: beginWord = "hit" endWord = "cog" wordList = ["hot","dot","dog","lot","log"]  Output: 0  Explanation: The endWord "cog" is not in wordList, therefore no possible transformation.

**************
* Solution (copy and paste your solution here with your name on it)
**************

# Name: Sandeep Prabhakar <me@sandeepraju.in>
class Node(object):
   def __init__(self, val, left=None, right=None):
       self.val = val
       self.left = left
       self.right = right


class Queue(object):
   def __init__(self):
       self.q = []

   def enqueue(self, item):
       self.q.append(item)

   def dequeue(self):
       return self.q.pop(0)
  
   def size(self):
       return len(self.q)

   def isEmpty(self):
       return self.size() == 0

def bfs(node):

   if node is None:
       return []

   q = Queue()
   q.enqueue(node)

   result = []

   while not q.isEmpty():
       item = q.dequeue()
       result.append(item.val)
      
       if item.left is not None:
           q.enqueue(item.left)

       if item.right is not None:
           q.enqueue(item.right)

   return result


def main():
   # example 01
   assert bfs(None) == []

   # example 02
   assert bfs(Node(1)) == [1]

   # example 03
   assert bfs(Node(1, Node(2), Node(3))) == [1, 2, 3]

   # example 04
   assert bfs(Node(1, Node(2, None, Node(4)), Node(3, Node(5), Node(6)))) == [1, 2, 3, 4, 5, 6]


if __name__ == '__main__':
   main()






# Name: Sandeep Prabhakar <me@sandeepraju.in>
class Queue(object):
   def __init__(self):
       self.q = []

   def enqueue(self, item):
       self.q.append(item)

   def dequeue(self):
       return self.q.pop(0)
  
   def size(self):
       return len(self.q)

   def isEmpty(self):
       return self.size() == 0


def possibleNextWords(wordList, visited, word): # Complexity: O(mxn) where m = word length, n = number of chars (26 in english)
   possibleWords = []
   alphabets = list("abcdefghijklmnopqrstuvwxyz")
   for idx, char in enumerate(word):
       for alpha in alphabets:
           if char != alpha: # don't replace the char with the same char
               possibleWord = word[:idx] + alpha + word[idx+1:]
               if possibleWord in wordList and possibleWord not in visited:
                   possibleWords.append(possibleWord)

   return possibleWords

def shortestTransformationSequence(wordList, beginWord, endWord):

   # make sure wordList is unique
   wordList = set(wordList)

   # make sure we don't cycle infinitely
   visited = set()

   q = Queue()
   q.enqueue((beginWord, 0)) # set the initial transformation length to 0
   visited.add(beginWord)

   # typical BFS algorithm
   while not q.isEmpty():
       word, transformationLength = q.dequeue()
      
       # check if the current word is the endWord
       if word == endWord:
           return transformationLength + 1 # NOTE: +1 is added since the question asks the sequence length (NOT the transformation length)
      
       # generate all possible next words to verify
       possibleWords = possibleNextWords(wordList, visited, word)
       for possibleWord in possibleWords:
           q.enqueue((possibleWord, transformationLength + 1))
           visited.add(possibleWord)

   # we don't have a transformation sequence for the given two word pairs
   return 0


def main():
   assert shortestTransformationSequence(["hot","dot","dog","lot","log","cog"], "hit", "cog") == 5
   assert shortestTransformationSequence(["hot","dot","dog","lot","log"], "hit", "cog") == 0

if __name__ == '__main__':
   main()








(2)
  /// Atiq, accepted in leetcode
  /// solution specifically adapted for leetcode problem
  /// complexity 26^n, for short string this is not much
  public int LadderLength(string beginWord, string endWord, IList<string> wordList) {
    var queue = new Queue<string>(new[] { beginWord, null });
    HashSet<string> VisitedSet = new HashSet<string>();
    HashSet<string> wordSet = new HashSet<string>(wordList);
    int level = 1;

    while (queue.Count > 0) {
      string u = queue.Dequeue();
      if (u == null) {
        level++;
        if (queue.Count > 0)
          queue.Enqueue(null);
        continue;
      }

      if (VisitedSet.Contains(u))
        continue;

      VisitedSet.Add(u);

      char[] chars = u.ToCharArray();
      for (int i=0; i<u.Length; i++) {
        for (char ch = 'a'; ch <= 'z'; ch++) {
          char old = chars[i];
          chars[i] = ch;
          string v = new string(chars);
          chars[i] = old;
          if (wordSet.Contains(v) == false)
            continue;

          if (v == endWord)
            return level + 1;

          if (VisitedSet.Contains(v) == false)
            queue.Enqueue(v);
        }
      }
    }
    return 0;
  }




*** Jack *** !!!!This is a Tree BFS!!!!!
1)
function bfs(node) {
 // your code here
 let result = [];
 let queue = [];
 let currentNode = null;

 queue.push(node);
 while (queue.length) {
   currentNode = queue.shift();

   // queue up nodes to be processed later
   if (currentNode.left) {
     queue.push(currentNode.left);
   }

   if (currentNode.right) {
     queue.push(currentNode.right);
   }

   result.push(currentNode.data);
 }

 return result;
}


*** Jack ***
2)
function findShortestWordLadderDistance(start, end, wordList) {
 if (start === end) return 0;
 if (start.length != end.length) return -1;

 let alphabet = "abcdefghijklmnopqrstuvwxyz";
 let queue = [start];
 let distance = 1;
 let neighbors = [];
 let toBeVisited = new Set(wordList);
 toBeVisited.delete(start);
  while (queue.length > 0) {
   for (let i = 0, length = queue.length; i < length; i++) {
     let next = queue.shift();
    
     neighbors = generateNeighbors(next, alphabet, toBeVisited);
     for (let j = 0, m = neighbors.length; j < m; j++) {
       let neighbor = neighbors[j];
       if (neighbor === end) return distance + 1;

       queue.push(neighbor);
       toBeVisited.delete(neighbor);
     }
   }
   distance++;
 }
 return -1;
}

function generateNeighbors(word, alphabet, toBeVisited) {
 let chars = word.split("");
 let result = [];

 for (let i = 0; i < chars.length; i++) {
   let char = chars[i];
  
   for (let j = 0; j < alphabet.length; j++) {
     chars[i] = alphabet[j];
     neighbor = chars.join("");
     if (toBeVisited.has(neighbor)) result.push(neighbor);
   }
   chars[i] = char;
 }

 return result;
}

console.log(findShortestWordLadderDistance("hit", "cog", ["hot","dot","dog","lot","log","cog"])); // 5

console.log(findShortestWordLadderDistance("hit", "cog", ["hot","dot","dog","lot","log"])); // -1


// Ladarius Greene
1).
function bfs(tree) {
queue = [];
queue.push(tree[0]);
while(queue.length > 0) {
       for(var i = 0; i < queue.length; i++) {
       currentNode = queue[i];
       console.log(currentNode);
       if(currentNode.left) {
           queue.push(currentNode.left);
           }
       if(currentNode.right) {
           queue.push(currentNode.right);
           }
       }
   }
};






*******
Jack
********
3) BFS on a graph

function GraphNode(value) {
 this.data = value;
 this.adjacent = [];
}

let g1 = new GraphNode(1);
let g2 = new GraphNode(2);
let g3 = new GraphNode(3);
let g4 = new GraphNode(4);
let g5 = new GraphNode(5);
let g6 = new GraphNode(6);
let g7 = new GraphNode(7);
let g8 = new GraphNode(8);
let g9 = new GraphNode(9);

g1.adjacent.push(g2);
g1.adjacent.push(g6);
g1.adjacent.push(g5);

g2.adjacent.push(g3);
g2.adjacent.push(g4);

g6.adjacent.push(g7);

g7.adjacent.push(g8);
g7.adjacent.push(g9);

function graphBfs(node) {
 // your code here
 let result = [];
 let queue = [];
 let currentNode = null;

 queue.push(node);
 while (queue.length) {
   currentNode = queue.shift();

   // queue up nodes to be processed later
   currentNode.adjacent.forEach((node) => {
     queue.push(node);
   })

   result.push(currentNode.data);
 }

 return result;
}

graphBfs(g1);

