
//       (5)
//        |
//       (1)
//        |
//       (2)

// let Node = function(value) {
//     this.data = value;
//     this.left = null;
//     this.right = null;
// }

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

// Jack's Solution
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

console.log(graphBfs(g1));


function graphDfs(node) {

}

//console.log(graphDfs(tree));


//      EXAMPLE 2

// Given two words(beginWord and endWord), and a dictionary 's word list, 
// find the length of shortest transformation sequence from beginWord to 
// endWord, such that:

// Only one letter can be changed at a time.
// Each transformed word must exist in the word list.Note that beginWord 
// is not a transformed word.
// Note:

//     Return 0
// if there is no such transformation sequence.
// All words have the same length.
// All words contain only lowercase alphabetic characters.
// You may assume no duplicates in the word list.
// You may assume beginWord and endWord are non - empty and are not the same.


// Example 1:

//     Input:
//     beginWord = "hit",
//     endWord = "cog",
//     wordList = ["hot", "dot", "dog", "lot", "log", "cog"]

// Output: 5



// Explanation: As one shortest transformation is 
// "hit" - > "hot" - > "dot" - > "dog" - > "cog",
//     return its length 5.
// Example 2:

//     Input:
//     beginWord = "hit"
// endWord = "cog"
// wordList = ["hot", "dot", "dog", "lot", "log"]

// Output: 0


// Jack's solution
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

console.log(findShortestWordLadderDistance("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 5

console.log(findShortestWordLadderDistance("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // -1

