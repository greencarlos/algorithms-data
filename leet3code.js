var MinStack = function() {
  this.min = [Number.POSITIVE_INFINITY]; // [Number.POSITIVE_INFINITY, -2, -2]
  this.stack = []; // [-2, 0]
};

MinStack.prototype.push = function(x) {
  this.stack.push(x);
  this.min.push(Math.min(x, this.min[this.min.length - 1]));
};

MinStack.prototype.pop = function() {
  this.stack.pop();
  if (this.min.length > 1) this.min.pop();
};

MinStack.prototype.top = function() {
  return this.stack[this.stack.length -1];
};

MinStack.prototype.getMin = function() {
  return this.min[this.min.length - 1];
};

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());  // --> Returns -3.
minStack.pop();
console.log(minStack.top());     // --> Returns 0.
console.log(minStack.getMin());  // --> Returns -2.

