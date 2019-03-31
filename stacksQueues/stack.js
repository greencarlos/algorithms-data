function Stack() {
  let storage = [];
  
  this.push = function(element) {
    storage.push(element)
  }
  this.pop = function(){
    return storage.pop()
  }
  this.peek = function(){
    return storage[storage.length - 1];
  }
}

let stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3)
stack.push(4);
stack.push(5); 

console.log(stack)
console.log(stack.pop()) // 5
console.log(stack.peek()) // 4
