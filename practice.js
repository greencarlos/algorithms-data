function NBA(name, team, pos) {
  this.name = name;
  this.team = team;
  this.pos = pos;
  this.null = null;
  this.undefined = undefined;
  this.string = "String"
  this.false = false;
  this.true = true;
  this.number = 9253037263
  this.array = [0, 5, 3, 2, 3, 4, 5, 6];
  this.obj = {
    hello : ["world"],
    this : ["is", "an" ],
   Object : ["Oriented", "Language"] 
}, 
  this.dunk = function(){
    console.log("Fly Like an Eagle")
  }
}

const curry = new NBA('Denzel Curry', 'Warriors', '3-Point')
const jordan = new NBA('Michael Jordan', 'Miami', 'Rush')
const lebron = new NBA('Lebron James', 'Finesse like an eagle')
const koby = new NBA('Kobe', 'FLorida', 'Domestic')
const shack = new NBA('Genie', 'Everywhere', 'Falling backwards')

console.log(curry)
curry.dunk()
console.log(curry.name)
console.log(curry.string.toUpperCase())
console.log(jordan.pos)
console.log(jordan.array.sort())
lebron.dunk()
console.log(lebron.pos)
console.log(Object.entries(lebron.obj))
console.log(koby.team)
shack.dunk()
console.log(Object.keys(shack.obj))
console.log(shack.name)
console.log(shack)

console.log("")
console.log("")
console.log("")
console.log("=================")
console.log("")
console.log("")
console.log("")

const arr1 = [1, 1, 1, 1, 1, 2, 3, 4, 3, 3,3, 4, 4, 4]
const arr2 = ["h", "h", "e", "l", "l", "o", "o", "o"]

const solution = (arr, i = 0, obj = {}) => { 
  if (i === arr.length) { 
    console.log(obj) 
    return; 
  }
  obj[arr[i]] = (obj[arr[i]] || 0) + 1;
  return solution(arr, i + 1, obj)
}

console.log(arr1)
console.log(solution(arr1))
console.log(arr2)
console.log(solution(arr2))
