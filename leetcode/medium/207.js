// https://leetcode.com/problems/course-schedule/
// GRAPH PROBLEM!!!!!

/*
There are a total of n courses you have to take, labeled from 0 to n-1.

Some courses may have prerequisites, 
for example to take course 0 you have to first take course 1,
which is expressed as a pair: [0,1]

Given the total number of courses and a list of 
prerequisite pairs, is it possible for you to finish all courses?

Example 1:

Input: 2, [[1,0]]
Output: true

Explanation:
There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

Example 2:

Input: 2, [[1,0],[0,1]]
Output: false

There are a total of 2 courses to take.

To take course 1 you should have finished course 0, 
and to take course 0 you should
also have finished course 1. So it is impossible.

The input prerequisites is a graph represented by 
a list of edges, not adjacency matrices.

Read more about how a graph is represented.

You may assume that there are no duplicate edges in the input prerequisites.
*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, pre) {
  if (!pre.length || !pre[0].length) return true
  let indegrees = new Array(numCourses).fill(0) 
  let graph = new Map()
  let queue = []

  for (var i = 0; i < pre.length; i++) {
    indegrees[pre[i][0]]++;
    let key = pre[i][1]
    
    if (graph.has(key)) {
      graph.set(key, graph.get(key).concat(pre[i][0]))
    } else {
      graph.set(key, [pre[i][0]])
    }
  }

  indegrees.forEach((indegree, index) => {
    if (indegree === 0) queue.push(index)
  })

  while(queue.length) {
    let cur = queue.shift()
    let courses = graph.get(cur)
    for (let i = 0; courses && i < courses.length; i++) {
      if (--indegrees[courses[i]] === 0) queue.push(courses[i])
    }
  }
  for (i = 0; i < indegrees.length; i++) {
    if (indegrees[i] !== 0) {
      return false
    }
  }
  return true
};

// Detecting cycles in a directed graph
console.log(canFinish(2, [[1,0]]), true)
console.log(canFinish(2, [[1,0], [0,1]]), false)
console.log(canFinish(3, [[0,1], [1,2], [2,0]]), false)
console.log(canFinish(3, [[0,1], [1,2]]), true)

