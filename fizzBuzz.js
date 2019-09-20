// fizzBuzz
const fizzBuzz = (arr, i = 0, newArr = []) => {
  if (i === arr.length) return newArr
  if (arr[i] % 3 === 0 && arr[i] % 5 !== 0) {newArr.push("Fizz")}
  if (arr[i] % 3 !== 0 && arr[i] % 5 === 0) {newArr.push("Buzz")}
  if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {newArr.push("FizzBuzz")}
  if (arr[i] % 3 !== 0 && arr[i] % 5 !== 0) {newArr.push(arr[i])}
  return fizzBuzz(arr, i + 1, newArr)
}

const arr = [1, 3, 5, 7, 10, 15]
const buzz = [1, "Fizz", "Buzz", 7, "Buzz", "FizzBuzz"]

console.log("---fizzBuzz---")
console.log(fizzBuzz(arr))
console.log(buzz)
console.log(" ")
