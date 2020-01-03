// https://leetcode.com/problems/implement-queue-using-stacks/

/* Implement the following operations of a queue using stacks.

push(x) -- Push element x to the back of queue.
pop() -- Removes the element from in front of queue.
peek() -- Get the front element.
empty() -- Return whether the queue is empty.
Example:

MyQueue queue = new MyQueue();

queue.push(1);
queue.push(2);
queue.peek();  // returns 1
queue.pop();   // returns 1
queue.empty(); // returns false
*/

/**
 * Initialize your data structure here.
 */

var MyQueue = function() {
  this.queue = []
};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
  this.queue.push(x)
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
  return this.queue.shift()
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
  return this.queue[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
  return this.queue.length === 0
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const queue = new MyQueue();

console.log(queue, 'MyQueue')
queue.push(1);
console.log(queue, 'MyQueue')
queue.push(2);  
console.log(queue, 'MyQueue')
queue.peek();  // returns 1
console.log(queue, 'MyQueue')
queue.pop();   // returns 1
console.log(queue, 'MyQueue')
console.log(queue, 'MyQueue')
queue.empty(); // returns false
