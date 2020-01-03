// https://leetcode.com/problems/implement-stack-using-queues/

/*
Implement the following operations of a stack using queues.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
empty() -- Return whether the stack is empty.
Example:

MyStack stack = new MyStack();

stack.push(1);
stack.push(2);  
stack.top();   // returns 2
stack.pop();   // returns 2
stack.empty(); // returns false
Notes:

You must use only standard operations of a queue -- which
means only push to back, peek/pop from front, size, and
is empty operations are valid. Depending on your language,
queue may not be supported natively. You may simulate a queue
by using a list or deque (double-ended queue), as long as you
use only standard operations of a queue.
You may assume that all operations are valid
(for example, no pop or top operations will be called on an empty stack).
*/

class Queue {
  constructor() {
    this.storage = {};
    this.last = 0;
    this.first = 0;
  }

  peek() {
    return this.storage[this.first]
  }

  size(){
    return this.last - this.first
  }

  isEmpty(){
    return this.last === this.first
  }

  dequeue() {
    let first = this.storage[this.first];
    delete this.storage[this.first];
    this.first++;
    return first;
  }

  enqueue(val){
    this.storage[this.last] = val;
    this.last++;
  }
}



/**
 * Initialize your data structure here.
 */
var MyStack = function() {
  this.queue = new Queue();
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
  let rotations = this.queue.size()

  this.queue.enqueue(x)

  while(rotations > 0) {
    this.queue.enqueue(this.queue.dequeue())
    rotations--;
  }
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
  return this.queue.dequeue()
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
  return this.queue.peek()
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.queue.isEmpty()
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
