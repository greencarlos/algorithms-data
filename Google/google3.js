

const func1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("function 1 ran")
  }, 1000)
})

const func2 = new Promise((resolve, reject) => {
  setTimeout(() => { resolve("function 2 ran")
  }, 2000)
})

const func3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("function 3 ran")
  }, 500)
})

const Promise.everything = (promises) => {
  const len = promises.length
  const result = []

  promises.forEach(promise => {
    if () {
      result.push(promise)
    } // add results of our promises to our result

  })

  if (len === result.length) {
    return result
  }
}

function combineFinder(combineFuncs) {
  return new Promise((resolve, reject) => {
    Promise.Everything(combineFuncs).then((message) => {
      console.log("combined all functions:", message)
    })
    resolve("combined all callbacks")
  })
}

const arr = [func1, func2, func3]

const combined = combineFinder(arr)

/*
Promise.all(arr).then(messages => {
  console.log('messages:', messages)
})
*/
