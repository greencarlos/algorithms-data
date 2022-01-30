function foo(codeList, cart) {
  let lP = 0
  let cP = 0

  for (let i = 0; i < codeList.length; i++) {
    let idx = 0
    const list = codeList[i]

    while(cart[cP] !== list[lP]) {
      cP++
    }

    while(cart[cP] === list[lP]) {
      cP++
      lP++

      if (list[lP] === 'anything') {
        lP++
        cP++
      } else if (list[lP] === undefined) {
        break
      }

      console.log('lP', lP, 'list[lP]', list[lP], 'list', list)
      console.log('cP', cP, 'cart[cP]', cart[cP], 'list.len', list.length)
      console.log(' ')
      if (cP > cart.length) return 0
    }

    if (lP < list.length) {
      return 0
    } else if (lP >= list.length) {
      lP = 0
    }
  }

  return 1
}

const list1 = [
  ['apple', 'apple'],
  ['banana', 'anything', 'banana']
]

const cart1 = [
  'orange',
  'apple',
  'apple',
  'banana',
  'orange',
  'banana'
]

console.log(foo(list1, cart1), 1)

const cart2 = [
  'banana',
  'orange',
  'banana',
  'apple',
  'apple'
]

console.log(foo(list1, cart2), 0)

const cart3 = [
  'apple',
  'banana',
  'apple', 
  'banana',
  'orange',
  'banana'
]

// console.log(foo(list1, cart3), 0)

const cart4 = [
  'apple',
  'apple',
  'apple',
  'banana'
]

// console.log(foo(list1, cart4), 0)
