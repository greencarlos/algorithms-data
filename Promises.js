const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Cash in Cash out')
  }, 1000)
})

const savagePromise = new Promise((resolve, reject) => {
  if (true) {
    setTimeout(() => {
      resolve('Cash in')
    }, 2000)
  } else {
    reject('Cash out')
  }
})

const tylerPromise = new Promise((resolve, reject) => {
  if (false) {
    setTimeout(() => {
      resolve('Cash in')
    }, 3000)
  } else {
    reject('Cash out')
  }
})

myPromise.then(value => console.log(value))
savagePromise.then(value => console.log(value))
tylerPromise.then(value => console.log(value))
  .catch(rejectValue => console.log(rejectValue))
