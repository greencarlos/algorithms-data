// The this keyword

var firstName = "Nic";
var lastName = "Fang";

var person1 = {
  firstName: "Jen",
  lastName: "Tze",
  fullName: function(){
  return this.firstName + " " + this.lastName;
  }
}

var person2 = {
  firstName: "Allen",
  lastName: "Span"
}

console.log(person1.fullName()); // Jen Tze
console.log(person1.fullName.call(person2)); // Allen Span

var test = person1.fullName;
console.log(test()); // Nic Fang
