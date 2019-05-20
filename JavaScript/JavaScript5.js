// Call and Apply
var person = {
  fullName: function(city, country){
  return this.firstName + " " + this.lastName + ", " + city + ", " + country;
  }
}

var person1 = {
  firstName: "John",
  lastName: "Doe",
}

const called = person.fullName.call(person1, "Oslo", "Norway");
const applied = person.fullName.apply(person1, ["Oslo", "Norway"]);

console.log(called)
console.log(applied)
