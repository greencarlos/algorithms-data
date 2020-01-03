// https://leetcode.com/problems/min-stack/

/*
Design a stack that supports push, pop, top, 
and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.

Example:

MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.stack = []
};

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  let min = this.stack.length === 0 ? x : this.stack[this.stack.length - 1].min
  this.stack.push({val: x, min: Math.min(min, x)})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  if (this.stack.length > 0) {
    this.stack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].val
  }
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  if (this.stack.length > 0) {
    return this.stack[this.stack.length - 1].min
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

const Stack1 = new MinStack();
Stack1.push(-2);
Stack1.push(0);
Stack1.push(-3);
Stack1.getMin();//   --> Returns -3.
Stack1.pop();
Stack1.top();//      --> Returns 0.
console.log(Stack1.getMin()); //  --> Returns -2.
