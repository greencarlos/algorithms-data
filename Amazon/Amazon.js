function searchSuggestions(repository, customer) {
  const output = []

  for (let i = 2; i <= customer.length; i++) {
    const check = customer.slice(0, i)
    const holder = []
    console.log('check', check)

    for (let word of repository) {
      if (word.includes(check)) {
        holder.push(word)
      }
    }
    output.push(holder)
  }
  return output.filter(x => x.length > 1)
}

const repo = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad']
const query = 'mouse'

console.log(searchSuggestions(repo, query))
console.log([
  ['mobile', 'moneypot', 'monitor'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad'],
  ['mouse', 'mousepad']
])

