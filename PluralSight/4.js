function Foo() {}
function Bar() {}
Bar.prototype = Object.create(Foo.prototype);

let banana = new Bar();
let apple = new Foo();

console.log(Bar.prototype.isPrototypeOf(apple));
console.log(Bar.prototype.isPrototypeOf(banana));
console.log(Foo.prototype.isPrototypeOf(banana));
